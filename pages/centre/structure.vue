<template>
<div>
  
      <div class="test_rejm"><marquee>{{$t('test')}}</marquee></div>
        <div class="managements port_fo">
          <div class="cards_one_f">
                  <div>
                    <div class="cards_one">
       <Navbar></Navbar>
      <div class="nav_left_container">
        <div class="row">
          <div class="col-xl-6">
            <div class="main_text ">
            {{structure.title}}
            </div>
          </div>
          </div>
      </div>
    </div>
    <div class="manage_f">
       <section class="struct main_struct cards_one">
      <img :src="structure.image_url" alt="">
    </section>
    </div>
                  </div>
     </div>
     
    <Footer></Footer>
      </div>

  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      structure:[]
    }
  },
  mounted(){
    this.$axios.$get('structure/',
     {
       headers: {
        'Accept-Language': this.$i18n.locale
    }
     }
     )
    .then(res=>{
      this.structure=res[0]
    })
  }
}
</script>
