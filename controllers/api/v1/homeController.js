const Question = require('../../../model/question');

module.exports.front = async function (req, res) {
  try {
    // finding all the questions and returning

    let question = await Question.find({},'title id')
    .populate('options','text votes link_to_vote')
    if (question) {
      return res.json({
        message:"Here are your questions",
       data: question,
       
        
      });
    }
    else {
        return res.json({
          message: "Question does not exists",
        });
      } 
  } catch (err) {
    return res.status(500).json({
      message: "Error from the server ",
      data: err,
    });
  }
};