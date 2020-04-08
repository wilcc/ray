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
    include:function(value){
      for (let i = 0;i < this.length; i++){
        if (this[i]===value){
          return true
        }
      }return false
    },
    indexOf: function(value){
      for (let i = 0;i < this.length; i++){
        if (this[i]===value){
          return i
        }
      }return -1
    },
    reverse: function(){
      for (let i = 0;i < Math.ceil((this.length-1)/2); i++){
        let value = this[i]
        let newValue = this[this.length-1-i]
        this[i] = newValue
        this[this.length-1-i] = value
      }
    },
    slice: function(start=0,end=this.length){
      const newObj = Ray()
      for (let i = start;i <= end-1;i++){
        newObj.push(this[i])
      }return newObj
    },
  }
}

module.exports = {
  Ray,
}