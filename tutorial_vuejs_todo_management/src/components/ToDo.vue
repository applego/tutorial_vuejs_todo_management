<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Todo Management.</h2>
    <hr/>
    <form>
        <button v-on:click="addTodo()">ADD TODO</button>
        <button>DELETE FINISHED TODOS</button>
        <p>input: <input type="text" v-model="newTodo"></p>
        <p>todo:{{ newTodo }}</p>
    </form>
    <div class="todo-list">
      <label class="todo-list__item"><input type="checkbox"><button>EDIT</button>vue-router</label>
      <label class="todo-list__item"><input type="checkbox"><button>EDIT</button>vuex</label>
      <label class="todo-list__item"><input type="checkbox"><button>EDIT</button>vue-loader</label>
      <label class="todo-list__item--checked"><input type="checkbox" checked><button>EDIT</button>awesome-vue</label>

      <label class="todo-list__item"
             v-for="todo in todos"
             v-bind:key="todo.id">
          <input type="checkbox"><button>EDIT</button>{{todo.text}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  data () {
    return {
      msg: 'Welcome to Your ToDo App',
      todos:[
          {text:'vue-router',done:false},
          {text:'vuex',done:false},
          {text:'vue-loader',done:false},
          {text:'awesome-vue',done:true},
      ],
      newTodo:""
    }
  },
  methods:{
      addTodo:function(event){
          let text = this.newTodo && this.newTodo.trim()
          if(!text){
              return
          }
          this.todos.push({
              text:text,
              done:false
          })
          this.newTodo = ''
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.todo-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>