// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
    el: "#app",
    data: {
        xemail: null,
        emailList: [],
    },
    mounted() {
        const emailRichiesti = 10;
        const emailArray = [];
        for (let i = 0; i < emailRichiesti; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((x) => {

                emailArray.push(x.data.response);

                if(emailArray.length === emailRichiesti){
                    this.emailList = emailArray;
                    console.log(this.emailList);
                }
            });
        }
    }
})