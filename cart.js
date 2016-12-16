class Cart{
  //What is the first part of every class? Type it below.
  constructor(i,q){
    this.itemList=i;
    this.itemQuantity=q;
  }

  //Type the instance functions below this comment.
  addItem(i,q){
    this.itemList.push;
    this.itemQuantity.push;
  }

  totalCart(){
    var total=0;

    for(var t=0;this.itemlist.length;t++){
      total+=(this.itemList[t]*this.itemQuantity[t]);
    }
    return total;
  }

  subCart(days){
    subCart=new Cart;

    for(var s=0;s<this.itemList.length;s++){
      if(this.itemList[s] == days){
        this.itemList.push[s];
      }
    }
    return subCart;
  }
}
