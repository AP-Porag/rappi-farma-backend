<template>
  <div class="invoice">
    <div class="no-print">
      <h1 class="text-capitalize mt-5">Print Invoice Or Download PDF Invoice</h1>
<!--      <h3>Because sometimes, all you need is something simple.</h3>-->
        <div class="btn-box">
            <v-btn class="print-btn" @click="print">print</v-btn>
            <v-btn class="pdf-btn" @click="generatePDF">download pdf</v-btn>
            <v-btn class="back-btn" @click="$router.push({ name: 'order'})">Back</v-btn>
        </div>
      <br /><br /><br />
    </div>
    <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="800"
        :filename="'RPI-'+invoice_number"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        :pdf-margin="10"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        @progress="onProgress($event)"
        ref="html2Pdf"
    >
      <section slot="pdf-content">
          <div class="invoice-box">
              <table>
                  <tr class="top">
                      <td colspan="3">
                          <table>
                              <tr>
                                  <td class="title">
                                      <img :src="require('../assets/logo.svg')" alt="Company logo" style="height:80px;width: 80px;" />
                                  </td>

                                  <td></td>
                                  <td>
                                      Invoice # : RPI-{{invoice_number}}<br />
                                      Order # : {{item.SKU}}<br />
                                      Created : {{invoice_created_date}}<br />
                                      Order Date : {{item.created_at}}
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>

                  <tr class="information">
                      <td colspan="3">
                          <table>
                              <tr>
                                  <td>
                                      Rappi Farma.<br />
                                      12345 Sunny Road<br />
                                      Sunnyville, TX 12345
                                  </td>

                                  <td></td>
                                  <td>
                                      {{user.full_name}}<br />
                                      {{user.phone}}<br />
                                      {{user.email}}<br />
                                      {{item.address}}
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>

                  <tr class="heading">
                      <td>Payment Method</td>
                      <td></td>

                      <td>{{payment_method === 'check'?'Check #':payment_method === 'card'?'Card #':payment_method ==='COD'?'':''}}</td>
                  </tr>

                  <tr class="details">
                      <td>{{payment_method}}</td>
                      <td></td>

                      <td>{{payment_method === 'check'? payment_check_number:payment_method === 'card'?payment_card_number:payment_method ==='COD'?'Cash On Delivery':''}}</td>
                  </tr>

                  <tr class="heading">
                      <td>Item</td>
                      <td>Quantity</td>
                      <td>Price</td>
                  </tr>

                  <tr :class="`item ${index === products.length - 1 ? 'last':''}`" v-for="(product,index) in products" :key="product.id">
                      <td>{{product.name}}</td>
                      <td>{{product.quantity}}</td>
                      <td>${{product.price * product.quantity}}</td>
                  </tr>

                  <tr class="sub-total">
                      <td></td>
                      <td></td>

                      <td>Subtotal: ${{item.subtotal}}</td>
                  </tr>

                  <tr class="sub-total">
                      <td></td>
                      <td></td>

                      <td>Discount: ${{item.discount_amount}}</td>
                  </tr>

                  <tr class="sub-total">
                      <td></td>
                      <td></td>

                      <td>Shipping: ${{item.shipping_charge != null ? item.shipping_charge :'0'}}</td>
                  </tr>

                  <tr class="total">
                      <td></td>
                      <td></td>

                      <td>Total: ${{item.total_price}}</td>
                  </tr>
              </table>
          </div>
      </section>
    </vue-html2pdf>
    <div class="print-invoice-box">
      <div class="invoice-box">
        <table>
          <tr class="top">
            <td colspan="3">
              <table>
                <tr>
                  <td class="title">
                    <img :src="require('../assets/logo.svg')" alt="Company logo" style="height:80px;width: 80px;" />
                  </td>

                    <td></td>
                  <td>
                    Invoice # : RPI-{{invoice_number}}<br />
                    Order # : {{item.SKU}}<br />
                    Created : {{invoice_created_date}}<br />
                    Order Date : {{item.created_at}}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="information">
            <td colspan="3">
              <table>
                <tr>
                  <td>
                    Rappi Farma.<br />
                    12345 Sunny Road<br />
                    Sunnyville, TX 12345
                  </td>

                    <td></td>
                  <td>
                    {{user.full_name}}<br />
                    {{user.phone}}<br />
                    {{user.email}}<br />
                    {{item.address}}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="heading">
            <td>Payment Method</td>
            <td></td>

            <td>{{payment_method === 'check'?'Check #':payment_method === 'card'?'Card #':payment_method ==='COD'?'':''}}</td>
          </tr>

          <tr class="details">
            <td>{{payment_method}}</td>
            <td></td>

            <td>{{payment_method === 'check'? payment_check_number:payment_method === 'card'?payment_card_number:payment_method ==='COD'?'Cash On Delivery':''}}</td>
          </tr>

          <tr class="heading">
            <td>Item</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>

          <tr :class="`item ${index === products.length - 1 ? 'last':''}`" v-for="(product,index) in products" :key="product.id">
            <td>{{product.name}}</td>
            <td>{{product.quantity}}</td>
            <td>${{product.price * product.quantity}}</td>
          </tr>

            <tr class="sub-total">
                <td></td>
                <td></td>

                <td>Subtotal: ${{item.subtotal}}</td>
            </tr>

            <tr class="sub-total">
                <td></td>
                <td></td>

                <td>Discount: ${{item.discount_amount}}</td>
            </tr>

            <tr class="sub-total">
                <td></td>
                <td></td>

                <td>Shipping: ${{item.shipping_charge != null ? item.shipping_charge :'0'}}</td>
            </tr>

          <tr class="total">
            <td></td>
            <td></td>

            <td>Total: ${{item.total_price}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<!--https://www.nightprogrammer.com/vue-js/generate-pdf-html-download-vue-js-example/-->
<script>
import VueHtml2pdf from "vue-html2pdf";
import moment from 'moment';
export default {
  components: {
    VueHtml2pdf,
  },
    data: () => ({
        success:false,
        error:false,
        loading:false,
        message:'',
        invoice_number:Math.floor(10000000 + Math.random() * 90000000),
        invoice_created_date:moment().format('MMM DD, YYYY'),
        customer_full_name:'John Doe',
        customer_phone_number:'+990123654789',
        customer_email:'john@example.com',
        payment_method:'COD',
        payment_status:'due',
        payment_card_number:'4000123456789010',
        payment_check_number:'4000123456789010',
        item:'',
        products:'',
        user:'',
    }),
    created() {
        this.getItemData();
    },
  methods:{
    print(){
      window.print()
    },
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
      async getItemData(){
          // Add a request interceptor
          axios.interceptors.request.use((config)=> {
              // Do something before request is sent
              this.loading = true;
              return config;
          },  (error) => {
              // Do something with request error
              this.loading = false;
              this.message = error.data.status
              this.error = true;
              return Promise.reject(error);
          });

          // Add a response interceptor
          axios.interceptors.response.use((response) => {
              this.loading = false;
              return response;
          },  (error) => {
              this.loading = false;
              this.message = error.data.status
              this.error = true;
              return Promise.reject(error);
          });
          let token = JSON.parse(window.localStorage.getItem('token'))
          await axios.get(`/api/order/${this.$route.params.id}`, {headers: { 'Authorization': 'Bearer ' + token }})
              .then((response)=>{
                  if (response.data.status != 200){
                      this.message = response.data.message;
                      this.error = true;
                  }else {
                      if (response.data.item != null){
                          this.item = response.data.item;
                          this.user = response.data.item.user;
                          this.products = response.data.item.products;
                          console.log(this.item)
                      }

                  }
              })
              .catch((error)=>{
                  this.message = 'Something went wrong !';
                  this.error = true;
              })
      },
  }
}

</script>
<style>
.invoice {
  font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #777;
}

.invoice h1 {
  font-weight: 300;
    margin-top: 50px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  color: #000;
}

.invoice h3 {
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 20px;
  font-style: italic;
  color: #555;
}

.invoice a {
  color: #06f;
}
.btn-box{
    width: 800px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
}
.print-invoice-box{
  margin-bottom: 100px;
}
.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
  font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  color: #555;
}
.print-btn{
    background: #006064 !important;
    color: #fff!important;
}
.pdf-btn{
    background: #BF360C !important;
    color: #fff!important;
}
.back-btn{
    background: #01579B !important;
    color: #fff!important;
}
.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
  border-collapse: collapse;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(3) {
  text-align: right;
}

.invoice-box table tr.top table td {
  padding-bottom: 20px;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.details td {
  padding-bottom: 20px;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none !important;
}

.invoice-box table tr.total td:nth-child(3) {
  border-top: 2px solid #eee;
  font-weight: bold;
}
.invoice-box table tr.sub-total td:nth-child(3) {
  border-top: 2px solid #eee;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td {
    width: 100%;
    display: block;
    text-align: center;
  }

  .invoice-box table tr.information table td {
    width: 100%;
    display: block;
    text-align: center;
  }
}

@media print {
  .no-print{
    display: none!important;
  }
  .invoice-box{
    padding: 0;
    border: 0;
    box-shadow: none !important;
  }
}
</style>
