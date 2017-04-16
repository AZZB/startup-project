function ExtendableBuiltin(cls){
    function ExtendableBuiltin(){
        cls.apply(this, arguments);
    }
    ExtendableBuiltin.prototype = Object.create(cls.prototype);
    Object.setPrototypeOf(ExtendableBuiltin, cls);

    return ExtendableBuiltin;
}



class HttpError extends ExtendableBuiltin(Error) {
  constructor(response) {
    super('http request error')
    this.response = response;
  }

  log() {
    console.log('HttpError: ', this.response);
  }

  json() {
    return this.response.json();
  }

  status() {
    return this.response.status;
  }

  url() {
    return this.response.url;
  }
}


export default HttpError;
