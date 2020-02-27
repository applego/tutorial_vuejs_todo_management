<template>
    <div class="googlemapjsapi">
        <script src="http://maps.google.com/maps/api/js?key={{ googlemapApiKey }}&language=ja"></script>
        <h1>{{ msg }}</h1>

    </div>
</template>

<script>
export default {
    name:'GoogleMap_JSAPI',
    data(){
        return{
            msg:'Welcome to Your Map App',
            googlemapApiKey:''
        }
    }
}
</script>