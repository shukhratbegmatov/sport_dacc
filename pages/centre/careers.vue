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
                {{$t('careers')}}
            </div>
          </div>
          </div>
      </div>
    </div>
    <div class="manage_f">
     <section class="nav_left_container struct">
      <div class="career_cards" v-for="item in careers" :key="item">
        <div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0009 30.6669C24.1011 30.6669 30.6677 24.1003 30.6677 16C30.6677 7.89971 24.1011 1.33313 16.0009 1.33313C7.90057 1.33313 1.33398 7.89971 1.33398 16C1.33398 24.1003 7.90057 30.6669 16.0009 30.6669Z" fill="#E6FFED"/>
            <path d="M16 32C7.1775 32 0 24.8225 0 16C0 7.1775 7.1775 0 16 0C24.8225 0 32 7.1775 32 16C32 24.8225 24.8225 32 16 32ZM16 2.66687C8.64812 2.66687 2.66687 8.64812 2.66687 16C2.66687 23.3519 8.64812 29.3331 16 29.3331C23.3519 29.3331 29.3331 23.3519 29.3331 16C29.3331 8.64812 23.3519 2.66687 16 2.66687Z" fill="#5A46D5"/>
            <path d="M14.6664 21.3331C14.4034 21.3334 14.1463 21.2555 13.9277 21.1094L9.92766 18.4425C9.63344 18.2463 9.4292 17.9413 9.35987 17.5945C9.29054 17.2478 9.3618 16.8877 9.55798 16.5934C9.75415 16.2992 10.0592 16.095 10.4059 16.0256C10.7527 15.9563 11.1128 16.0276 11.407 16.2237L14.4102 18.2237L20.3095 11.1444C20.5359 10.8727 20.8609 10.7021 21.213 10.67C21.5652 10.6379 21.9157 10.7471 22.1873 10.9734C22.459 11.1998 22.6297 11.5248 22.6617 11.8769C22.6938 12.2291 22.5846 12.5796 22.3583 12.8513L15.6914 20.8512C15.5665 21.002 15.4099 21.1233 15.2327 21.2066C15.0555 21.2899 14.8622 21.3331 14.6664 21.3331Z" fill="#5A46D5"/>
          </svg>
        </div>
        <div class="carerr_text">
          {{item.description}}
        </div>
        <div>

        </div>
      </div>
    </section>
    <section class="container_s">
        <div class="resume">
            <div>
                <div class="career_text1">{{$t('d_career')}}</div>
          <div class="career_button">
            <NuxtLink to="/">
{{$t('send')}}
            </NuxtLink>
          </div>
            </div>
            <div class="icon_r">

                <svg width="300" height="184" viewBox="0 0 300 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M91.8231 55.6472L66.2699 52.5461L69.3667 27.0287C70.2183 20.0115 65.1656 13.5723 58.1385 12.7195C51.1113 11.8667 44.6651 16.9104 43.8135 23.9277L40.7168 49.4451L15.1637 46.344C8.13655 45.4912 1.69034 50.5349 0.838738 57.5522C-0.0128608 64.5695 5.03983 71.0086 12.0669 71.8614L37.6201 74.9625L34.5234 100.48C33.6718 107.497 38.7244 113.936 45.7516 114.789C52.7787 115.642 59.2249 110.598 60.0765 103.581L63.1732 78.0635L88.7263 81.1646C95.7535 82.0174 102.2 76.9737 103.051 69.9564C103.903 62.9391 98.8502 56.5 91.8231 55.6472ZM230.817 85.4617C252.026 88.0356 271.094 73.0012 273.664 51.8217C276.234 30.6423 261.316 11.4834 240.107 8.90954C236.019 8.41337 231.98 8.57064 228.264 9.28477C234.292 20.5031 236.991 33.5183 235.334 47.1701C233.678 60.8219 227.832 72.6707 219.407 82.2645C222.845 83.847 226.728 84.9656 230.817 85.4617ZM166.934 77.7091C188.143 80.283 207.211 65.2485 209.781 44.0691C212.351 22.8896 197.433 3.73077 176.224 1.15689C155.015 -1.41699 135.82 13.602 133.249 34.7814C130.679 55.9608 145.725 75.1352 166.934 77.7091ZM163.837 103.226C138.284 100.125 85.6296 106.682 82.5329 132.199L80.9845 144.958C80.1329 151.975 85.1856 158.415 92.2127 159.267L219.978 174.773C227.006 175.625 233.452 170.582 234.303 163.564L235.852 150.806C238.948 125.288 189.391 106.328 163.837 103.226ZM248.171 115.532C257.645 126.133 263.232 138.852 261.405 153.907L259.082 173.045C258.819 175.214 258.3 177.352 257.669 179.347L290.25 183.301C293.827 183.735 296.978 181.269 297.412 177.696L299.735 158.558C302.119 138.91 273.31 123.114 248.171 115.532Z" fill="url(#paint0_linear_515_9046)"/>
                <defs>
                <linearGradient id="paint0_linear_515_9046" x1="163.448" y1="-0.393641" x2="143.319" y2="165.469" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3518EF"/>
                <stop offset="1" stop-color="#928EAE" stop-opacity="0.35"/>
                </linearGradient>
                </defs>
                </svg>

        </div>

        </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-xl-4" v-for="items in marketing_info">
          <div class="car_card">
            <div class="car_icon">
              <div>
                <img :src="items.logo_url">
              </div>
            </div>
            <div class="car_text">
              {{items.title}}
            </div>
            <div class="car_description">
              {{items.description}}
            </div>
          </div>
        </div>
      </div>
      <div class="setResume">
        <div class="career_title">{{$t('send')}}</div>
        <div class="form_category">
          <form @submit.prevent="postResume()">
            <div class="form_careers">
              <input type="text" :placeholder="$t('name')" v-model="name">
            </div>
            <div class="form_careers">
              <input type="text" :placeholder="$t('email')" v-model="email_address">
            </div>
            <div class="form_careers">
              <input type="text" :placeholder="$t('cover')" v-model="message">
            </div>
            <label for="fileR" class="form_files">
              <div class="f_career">
                <div>

                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_227_8696)">
                      <path d="M27.4275 12.5734C26.6854 10.4047 25.2645 8.53269 23.3753 7.23475C21.486 5.93681 19.2289 5.28197 16.9384 5.36725C14.6478 5.45253 12.4456 6.27339 10.6581 7.70821C8.87063 9.14304 7.59286 11.1155 7.01413 13.3334C5.24602 13.2874 3.53207 13.9457 2.24932 15.1634C0.966568 16.3812 0.220101 18.0586 0.174131 19.8267C0.12816 21.5948 0.786451 23.3088 2.00419 24.5915C3.22192 25.8743 4.89935 26.6207 6.66746 26.6667H13.3341V24.0001H6.66746C5.6066 24.0001 4.58918 23.5786 3.83904 22.8285C3.08889 22.0783 2.66746 21.0609 2.66746 20.0001C2.66746 18.9392 3.08889 17.9218 3.83904 17.1716C4.58918 16.4215 5.6066 16.0001 6.66746 16.0001C7.02401 16.0077 7.37806 16.0615 7.7208 16.1601L9.21413 16.5734L9.4008 15.0401C9.6351 13.2046 10.4984 11.5071 11.8437 10.2367C13.189 8.96623 14.9331 8.20143 16.779 8.0725C18.6248 7.94357 20.4583 8.45849 21.9672 9.52957C23.476 10.6006 24.5669 12.1616 25.0541 13.9467L25.2541 14.6667L25.9741 14.8801C26.9436 15.1537 27.7968 15.7372 28.4035 16.5413C29.0102 17.3454 29.3371 18.3261 29.3341 19.3334C29.3341 20.5711 28.8425 21.758 27.9673 22.6332C27.0921 23.5084 25.9051 24.0001 24.6675 24.0001H21.3341V26.6667H24.6675C26.3707 26.6792 28.0248 26.0961 29.3438 25.0184C30.6629 23.9407 31.5639 22.4361 31.8913 20.7645C32.2186 19.0929 31.9517 17.3595 31.1367 15.8639C30.3216 14.3682 29.0096 13.2044 27.4275 12.5734Z" fill="black"/>
                      <path d="M22.2801 20.3867L17.3334 15.4534L12.3867 20.3867L14.2801 22.28L16.0001 20.5467V26.6667H18.6667V20.5467L20.3867 22.28L22.2801 20.3867Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_227_8696">
                        <rect width="32" height="32" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span>{{$t('resume')}}</span>
                </div>
              </div>
            </label>
            <input type="file" class="d-none" id="fileR" 
            @change="trySubmitFile"
            accept="*"
            name="datafiles"
            ref="datafiles"
            >
            <div class="f_career_btn">
              <button>{{$t('send')}}</button>
            </div>
          </form>
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
      careers:[],
      marketing_info:[],
      cv_file:'',
      message:'',
      email_address:'',
      name:'',
         myImages:[],
      imageUrl:[],
      files_name:[],
    }
  },
  mounted(){
    this.$axios.$get('career-info/',
     {
       headers: {
        'Accept-Language': this.$i18n.locale
    }
     }
     )
    .then(res=>{
      this.careers=res.career_info
      this.marketing_info=res.marketing_info
    })
  },
  methods:{
      trySubmitFile(e) {
      for (let i = 0; i < e.target.files.length; i++) {
        this.files_name.push(e.target.files[i])
      }
      var files = Array.from(e.target.files);
      console.log(typeof (files))
      files.forEach((file) => {
        this.myImages.push(file);
        var reader = new FileReader();
        var vm = this;
        reader.onload = function(e) {
          vm.imageUrl.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
    postResume(){
       const form = new FormData();
         form.append("cv_file", this.myImages[0]);
      form.append( "message",this.message);
      form.append("email_address",this.email_address);
      form.append("name",this.name);
      this.$axios.$post('resume/',form)
      .then(()=>{
        this.message=''
        this.email_address=''
        this.name=''
      })
      .catch(()=>{
        this.message=''
        this.email_address=''
        this.name=''
      })
    }
  }
}
</script>

