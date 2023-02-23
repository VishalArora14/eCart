//Extends means ErrorHandler is inherited from class Error
//Error is default class of node

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message); //super is constructor of parent class ie Error in this case
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor); //tagetObject, constructor
  }
}
module.exports = ErrorHandler;
