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
             {{$t('portfolio')}}
            </div>
          </div>
          </div>
      </div>
    </div>
    <div class="manage_f">
    <section class="container_s">
      <div >
        <div class="projects" v-for="item in portfolio">
          <!-- <h1 class="portfolio_names">CRM</h1> -->
          <div class="pro_img">
            <img :src="item.image[0].image_url" alt="">
          </div>
          <div class="port_btn" >
            <div class="pro_title">{{item.title}}</div>
            <div class="all_link">
              <NuxtLink to="/">
                {{$t('more_project')}}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
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
      portfolio:[]
    }
  },
   mounted(){
    this.$axios.$get('portfolio/',
     {
       headers: {
        'Accept-Language': this.$i18n.locale
    }
     }
     )
    .then(res=>{
      this.portfolio=res
    })
  },
}
</script>

