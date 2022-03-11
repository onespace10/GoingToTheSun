<script>
export default{
    props:{
        imgUrl: String,
        name : String,
        description: String
    }
}
</script>
<template>
<div class="card">
    <img :src="imgUrl" alt="profile image" class="card__img">
    <h2 class="card__name">{{ name }}</h2>
    <h2 class="card__description">{{ description }}</h2>
</div>
</template>
<style scoped>
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height:250px;
    background-color: cadetblue;
    box-shadow: 1px 1px 10px gray;
}
.card__img {
    width: 100px;
    height: 120px;
    object-fit: cover;
    border-radius: 100%;
    border: solid 2px;
    padding: 5px;
    background-color: white;
}
.card__name {
    font-weight: 700;
}
.card__description {
    font-weight: 300;
    
}
</style>