const Ray = () => {
  return {
    length: 0,
    push:function(value){
      this[this.length] = value
      this.length++
    },
    pop: function(){
      const toBeRemoved = this[this.length-1]
      delete this[this.length-1]
      this.length--
      return toBeRemoved
    },
    unshift: function(value){
      this.length++
      for (let i = this.length-1;i > 0; i--){
        this[i] = this[i-1]
      }
      this[0]=value
    },
    shift: function(){
      const toBeRemoved = this[0]
      for (let i = 0;i < this.length; i++){
        this[i] = this[i+1]
      }

      delete this[this.length-1]
      this.length--
      return toBeRemoved
    },
  }
}

module.exports = {
  Ray,
}