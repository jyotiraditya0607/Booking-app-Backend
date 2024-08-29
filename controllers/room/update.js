const Room = require('../../models/room');

const updateRoom = async (req, res, next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedRoom);
    }
    catch(err){
        next(err);
    }
}

module.exports = updateRoom;