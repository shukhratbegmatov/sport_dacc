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
              ОТКРЫТЫЕ ДАННЫЕ
            </div>
          </div>
          </div>
      </div>
    </div>
    <div class="manage_f">
    <section class="container_s">
      <div class="col-10">
   <div class="col-xl-12" v-for="item in 10" :key="item">
            <div class="data_bg">
              <div class="f_positions">
                <div class="op_title">
                  Сведения о служебных автомототранспортных средствах, служебных домах и другом недвижимом имуществе,
                  находящемся в ведении государственных органов и организаций (за исключением предметов, используемых в
                  оперативно-розыскной, военной и других специальных службах)
                </div>
                  <div class="open_positions">
                  <NuxtLink to="/">
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25019 0.670442L8.25019 21.5414L2.03044 15.2977C1.73719 15.0044 1.26244 15.0044 0.969937 15.2977C0.676687 15.5909 0.676687 16.0657 0.969937 16.3582L8.39419 23.7832C8.68294 24.0719 9.16594 24.0719 9.45469 23.7832L16.8797 16.3582C17.1729 16.0649 17.1729 15.5902 16.8797 15.2977C16.5864 15.0044 16.1117 15.0044 15.8192 15.2977L9.75019 21.5414L9.75019 0.670442C9.75019 0.256442 9.41419 -0.0795559 9.00019 -0.0795559C8.58619 -0.0795559 8.25019 0.256442 8.25019 0.670442Z" fill="#5A46D5"/>
                    </svg>
                    <div class="download_text">
                      Загрузит
                    </div>
                  </NuxtLink>
                  </div>
              </div>
            </div>
          </div>
     
      </div>
    </section>
    </div>
                  </div>
     </div>
      <div class="mt_footer">
<Footer></Footer>
    
      </div>
      </div>

  </div>
 </template>

<script>
export default {
  name: 'IndexPage'
}
</script>

