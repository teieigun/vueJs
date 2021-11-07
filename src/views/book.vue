<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>图书名称</td>
                <td>作者</td>
            </tr>
            <tr v-for="item in books" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>
    </div>

</template>

<script>
    export default {
        name: "book",
        data(){
            return {
                msg:'Hello Vue',
                books:[
                    {
                        id:1,
                        name:'study java1',
                        author:'teieigun1'
                    },
                    {
                        id:2,
                        name:'study java2',
                        author:'teieigun2'
                    },
                    {
                        id:3,
                        name:'study java3',
                        author:'teieigun3'
                    }

                ]
            }
        }
        ,
        created() {
            alert("hello");
            const _this = this;
            axios.get('http://localhost:8088/book').then(function (response) {
                _this.books = response.data;
            });
        }
    }
</script>

<style scoped>

</style>