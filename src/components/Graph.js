/**
 * Created by simon on 2017/3/5.
 */


export default{
  data(){
    return {
      msg: 'hello vue'
    }
  },


  created(){
    var chart = nv.models.pieChart();
    chart.width(500);
    chart.title('stuff').titleOffset(-10);
    chart.options({ height: 500, donut: true });
  }
}
