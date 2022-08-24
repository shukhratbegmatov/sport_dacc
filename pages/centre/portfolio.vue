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
              портфолио
            </div>
          </div>
          </div>
      </div>
    </div>
    <div class="manage_f">
    <section class="container_s">
      <div >
        <div class="projects" v-for="item in 3">
          <h1 class="portfolio_names">CRM</h1>
          <div class="pro_img">
            <img src="../../assets/image/image7.png" alt="">
          </div>
          <div class="port_btn" >
            <div class="pro_title">Внутренняя система Департамента финансов Министерства развития спорта</div>
            <div class="all_link">
              <NuxtLink to="/">
                Просмотр проекта
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
  name: 'IndexPage'
}
</script>

