function data(name){
  this.name=name;

}
data.prototype.printData=function(){

  console.log(this.name);
}

data = new data('Harsh');
data.printData();
