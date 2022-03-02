import React from 'react'
import './tabel.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Ptabel = () => {
  return (
    <div>
       <div className="main-content">
    <div class="row">
      <div className="col col-md-6">
         <h3>   جدول بيانات عربي بسيط باستخدام بوتستراب اربعة</h3>
      </div>
      <div className="col col-md-6" style={  { textAlign:'right',
    float:'right'}}>
      
        
      </div>
    </div>

   
<table id="files_list" className="table table-striped dt-responsive  " style={{width:'100%'}}>
            <thead class="thead_dark">
                <tr>
                    <th className="th_text">اسم المستخدم</th>
                    <th className="th_text">التاريخ </th>
                    <th className="th_text">المولد</th>
                    <th className="th_text">الكمية باللتر</th>
                    <th className="th_text">سعر اللتر </th>
                    <th className="th_text">السعر الإجمالي </th>
                    <th className="th_text">سعر البيع</th>
                    <th className="th_text">اجمالي سعر البيع</th>
                    <th className="th_text">صافي الربح</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>معاذ المدهون</td>
                    <td ><input type="date"/></td>
                    <td>الشجاعية</td>
                    <td>1800</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td> ,/في</td>
                   
                </tr>
                  <tr>
                    <td>محدمد بن  المهدي</td>
                    <td>مبرمج</td>
                    <td>300</td>
                    <td>11/05/2017</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>نزار المرزوقي</td>
                    <td>مصمم واب</td>
                    <td>456</td>
                    <td>11/09/2019</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>دافنشي</td>
                    <td>محلل فني</td>
                    <td>406</td>
                    <td>11/09/2019</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>علي احمد</td>
                    <td>مدير</td>
                    <td>366</td>
                    <td>04/25/2015</td>
                    <td>ادارة الموارد البشرية</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>محمد السيد</td>
                    <td>مسوق</td>
                    <td>426</td>
                    <td>11/09/2019</td>
                    <td>ادارة التسويق</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>مالك جابر</td>
                    <td>خدمة العملاء</td>
                    <td>416</td>
                    <td>11/09/2019</td>
                    <td>ادارة الشحن</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>نزار المرزوقي</td>
                    <td>مصمم واب</td>
                    <td>456</td>
                    <td>11/09/2019</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
                  <tr>
                    <td>نزار المرزوقي</td>
                    <td>مصمم واب</td>
                    <td>456</td>
                    <td>11/09/2019</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>نزار المرزوقي</td>
                    <td>مصمم واب</td>
                    <td>456</td>
                    <td>11/09/2019</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>نزار المرزوقي</td>
                    <td>مصمم واب</td>
                    <td>456</td>
                    <td>11/09/2019</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
               <tr>
                    <td>نزار المرزوقي</td>
                    <td>مصمم واب</td>
                    <td>456</td>
                    <td>11/09/2019</td>
                    <td>ادارة الانتاج</td>
                    <td>htp://www.devinshi.com</td>
                    <td>
                   <button className="btn btn-sm btn-download btn-info "> <i class="fas fa-arrow-circle-down"></i> </button>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
      </div>
  )
}

export default Ptabel