<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="addRed">Red</button>
    <button v-on:click="addBlue">Blue</button>
    <button v-on:click="addGreen">Green</button>
    <form>
      <p>color name: {{newColor}}</p>
      <p>input: <input type="text" v-model="newColor" v-on:input="updateNewColor($event.target.value)"> <button v-on:click="addColor">追加</button>
      </p>
    </form>
    <div class="color-list">
      <button v-on:click="deleteColor">チェック済み削除</button>
      <label class="color-list-item" v-for="color in colors" v-bind:class="{'checked':color.checked}">
        <p>
          <input type="checkbox" v-model="color.checked">
          <button @click="color.editing = !color.editing">EDIT</button>
          <span v-if="color.editing"> <input type="text" v-model="color.text" @keyup.enter="color.editing = !color.editing"></input> </span>
          <span v-else>{{color.text}}</span>
          <label v-if="color.checked">(チェック済み)</label>
        </p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
    name:'ColorSelect',
    data(){
        return {
            msg:'Choose your color',
            colors:[

            ],
            newColor:""
        }
    },
    methods:{
        addRed:function(event){
            this.colors.push({
                text:"Red",
                checked:false,
                editing:false
            })
        },
        addBlue:function(event){
            this.colors.push({
                text:"Blue",
                checked:false,
                editing:false
            })
        },
        addGreen:function(event){
            this.colors.push({
                text:"Green",
                checked:false,
                editing:false
            })
        },
        addColor:function(event){
            let text = this.newColor && this.newColor.trim()
            if(!text){
                return
            }

            this.colors.push({
                text:text,
                checked:false,
                editing:false
            })

            this.newColor = ""
        },
        deleteColor:function(event){
            for(let i=this.colors.length-1;i>=0;i--){
                if(this.colors[i].checked) this.colors(i,1)
            }
        },
        updateNewColor:function(value){
            this.newColor = value
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .checked { color: red; }
</style>