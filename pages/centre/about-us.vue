<template>
  <div class="about_border">
    
      <div class="test_rejm"><marquee>{{$t('test')}}</marquee></div>
          <div class="head_main">
            <div class="header_home about">
                            <div class="dark_overlow2"></div>
                  <header class="cards_one">
      <Navbar></Navbar>
      <div class="nav_left_container">
        <div class="row">
          <div class="col-xl-6 z_index">
            <div class="main_text a_title ">
              {{$t('about')}}
            </div>
            <div class="a_description">
                {{abouts.description}}
            </div>

          </div>
          <div class="col-xl-6 a_image z_index">
            <img src="../../assets/image/Ellipse10.png" alt="">
          </div>
        </div>
      </div>

  </header>
            </div>
          </div>

      <div class="about_position ">
        <section class="about_texts z_index">
            <div class="child_about_texts cards_one"> 
              <div class="about_title">
            {{$t("main_a")}}
          </div>
          <div class="about_description" v-for="item in abouts.tasks">
                {{item.description}}
          </div>
          
            </div>
        </section>
    
            <div class="a_border2"></div>
        <div class="a_border1"></div>
      </div>
    <Footer></Footer>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      abouts:[]
    }
  },
  mounted(){
      this.$axios.$get('about/',
    {
        headers: {
        'Accept-Language': this.$i18n.locale
    }
    
    }
    )
      .then(res=>{
        this.abouts=res.about[0]
      })
  }
}
</script>

