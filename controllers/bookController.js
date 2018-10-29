let schema = require('../app_api/db.js');

exports.addBook = function (req, res) {
    /**
     * Add addBook here!
     */ 
     let book = new schema({
        title:req.body.title,
        author:req.body.author,
     });
     book.save(function (err){
        if (err) throw err;
        res.status(200).json(book._id);
     });

}

exports.updateBook = function (req, res) {
    /**
     * Add updateBook here!
     */
     let book = req.body;
     schema.update({_id:book._id},{$set:book},function(err){
        if (err) throw err;
        res.status(200).json(true);
     })
}

exports.deleteBook = function (req, res) {
    /**
     * Add deleteBook here!
     */
     let book = req.body.book;
     schema.deleteOne({_id:book._id},function(err){
        if (err) throw err;
        res.status(200).json(true);
     })
}

exports.retrieveBook = function (req, res) {
    /**
     * Add retrieveBook here!
     */
     let book = req.query._id;
     schema.findById(book,function(err,result){
        if (err) throw err;
        res.status(200).json(result);
     });
}
exports.retrieveBooks = function (req, res) {
    /**
     * Add retrieveBooks here!
     */
     schema.find({},function(err,book){
        if (err) throw err;
        res.status(200).json(book);
     });
}
