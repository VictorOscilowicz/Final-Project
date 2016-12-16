class Password{
  //The first part of the class.
  constructor(u,r){
    this.publicKey=u;
    this.privateKey=r;
  }

  //Instance functions below this comment.
  validPublicKey(){
    while(this.publicKey.length>=8 && this.publicKey.length<=25);
      return "true";
    }
    else(){
      return "false";
    }

  validPrivateKey(){
    for(var h=0;h<this.privateKy.length;a++){
      if(this.privateKey[4]=="-" && this.privateKey[9]=="-"){
        return "true";
      }
    }

      else if(this.privateKey.length!==""){
        return "true";
      }

      else(){
        return "false";
      }
  }

  //Static function below this comment.
  static makePrivateKey(){
    let key="";
    let limit=14;

    for(l=0;l<=14;l++){
      let number=String(Math.round(Math.random()*10));
      key = key + number;
      number.push[4,9]=="-";
    }
  }
}
