const Sauce = require('../models/sauce');
const fs = require('fs');

exports.getAllSauce = (req, res, next) => {
    Sauce.find()
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(400).json({ error }));
  };

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(404).json({ error }));
  };

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    delete sauceObject._userId;
    const sauce = new Sauce({
        ...sauceObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes : 0,
        dislikes : 0,
        usersLiked : [],
        usersDisliked : []
    });
  
    sauce.save()
    .then(() => { res.status(201).json({message: 'Sauce créer !'})})
    .catch(error => { res.status(400).json( { error })})
 };

 exports.modifySauce = (req, res, next) => {
    let sauceObject = {};
    if(req.file){
        sauceObject = {
            ...req.body,
            imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        };
    }
    else{
        sauceObject = {...req.body}
    }
    delete sauceObject._userId;
    Sauce.findOne({_id: req.params.id})
        .then((sauce) => {
            if (sauce.userId != req.auth.userId) {
                res.status(403).json({ message : 'unauthorized request'});
            } else {
                if(req.file){
                    const filename = sauce.imageUrl.split('/images/')[1]
                    fs.unlinkSync(`images/${filename}`)
                }
                Sauce.updateOne({ _id: req.params.id}, { ...sauceObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Sauce modifié!'}))
                .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
 };

 exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id})
        .then(sauce => {
            if (sauce.userId != req.auth.userId) {
                res.status(403).json({message: 'unauthorized request'});
            } else {
                const filename = sauce.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Sauce.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'Sauce supprimé !'})})
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
 };

 exports.likeSauce = (req, res, next) => {
    const like = req.body.like;

    Sauce.findOne({ _id: req.params.id})
        .then(sauce => {
            if (like == 1 ){
                sauce.usersLiked.push(req.auth.userId);
                sauce.likes ++;
            }
            else {
                if(like == -1){
                    sauce.usersDisliked.push(req.auth.userId);
                    sauce.dislikes ++;
                }
                else{
                    if(like == 0){
                        if (sauce.usersDisliked.indexOf(req.auth.userId) != -1){
                            sauce.usersDisliked.splice(sauce.usersDisliked.indexOf(req.auth.userId),1);
                            sauce.dislikes --;
                        }
                        if (sauce.usersLiked.indexOf(req.auth.userId) != -1){
                            sauce.usersLiked.splice(sauce.usersLiked.indexOf(req.auth.userId),1);
                            sauce.likes --;
                        }
                    }
                }
            }
            Sauce.updateOne({ _id: req.params.id}, { likes : sauce.likes , dislikes : sauce.dislikes, usersDisliked : sauce.usersDisliked, usersLiked : sauce. usersLiked})
            .then(() => res.status(200).json({message : 'Préférence enregistrée'}))
            .catch(error => res.status(401).json({ error }));

        })
        .catch( error => {
            res.status(500).json({ error });
        });
 };