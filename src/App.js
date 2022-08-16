
import './App.css';

import titicn from './files/title.jpg'
function App() {
  let p=[0,0,0,0,0,0,0,0,0]
   let optbtnClick=(e)=>{
    let sum = 0;
          let ins = e.target.parentElement.className;
          for (let i = 0; i < e.target.parentElement.children.length; i++) {
            e.target.parentElement.children[i].style.border='none'
          }
          switch (ins) {
            case 'qoptions optone':
              
              e.target.style.border='1px solid black'
            p[0]=e.target.value
              break;
            case 'qoptions optwo':
              e.target.style.border='1px solid black'
              p[1]=e.target.value
              break;
            case 'qoptions opthree':
              e.target.style.border='1px solid black'
              p[2]=e.target.value
              break;
            case 'qoptions optfour':
              e.target.style.border='1px solid black'
              p[3]=e.target.value
              break;
            case 'qoptions optfive':
              e.target.style.border='1px solid black'
              p[4]=e.target.value
              break;
            case 'qoptions optsix':
              e.target.style.border='1px solid black'
              p[5]=e.target.value
              break;
              case 'qoptions optseven':
                e.target.style.border='1px solid black'
                p[6]=e.target.value
                break;
              case 'qoptions opteight':
                  e.target.style.border='1px solid black'
              p[7]=e.target.value
              break;
              case 'qoptions optnine':
                e.target.style.border='1px solid black'
              p[8]=e.target.value
              break;
             
          }
          for (let i = 0; i < p.length; i++) {
            sum += parseInt(p[i]);;
        }
        document.getElementById("ansNum").innerText=sum
        if(sum>=0 && sum<=4){
          document.getElementsByClassName("ansTxt")[0].innerText='None'
        }
        else if(sum>=5 && sum <=9){
          document.getElementsByClassName("ansTxt")[0].innerText='Mild' 
        }
        else if(sum>=10 && sum <=14){
          document.getElementsByClassName("ansTxt")[0].innerText='Moderate' 
          document.getElementsByClassName("ansTxt")[0].style.color='blue'
        }
        else if(sum>=15 && sum <=19){
          document.getElementsByClassName("ansTxt")[0].innerText='Moderately severe' 
          document.getElementsByClassName("ansTxt")[0].style.color="red"
        }
        else if(sum>=20 && sum <=27){
          document.getElementsByClassName("ansTxt")[0].innerText='Severe' 
          document.getElementsByClassName("ansTxt")[0].style.color="red"
        }
   }
   
  return (
     <div className='dwhole'>
     
      <div className='dnavbars'>
        <div className='dnavimg'>
          <img src={titicn} width="80vw" height="80vh"style={{borderRadius:'50%'}}></img>
        </div>
        <div className='dnavtext'>
        <h3>Professional Reference / Medical Calculator</h3>
        <h1>Patient Health Questionnaire (PHQ-9)</h1>
        <h3>Free Depression Test</h3>
        </div>
      </div>
      <div className='dcautions'>
        <p className='ppone'>
          <h2>This tool is for <b>Medical Professionals</b></h2>'
     
          Professional Reference tools are designed for health professionals to use. They are written by UK doctors 
          and based on research evidence, UK and European Guidelines, so you may find the language more technical
          than the condition leaflets.'
        </p>
        <p className='pptwo'>
        Please note that this questionnaire is not designed for people to complete without any input from their healthcare professional.

Please contact your doctor if you are:
Concerned about your mood; or
Have completed this questionnaire and it indicates that you may be depressed.
If you are having any thoughts of self-harm consult a doctor <b style={{color:'red'}}>immediately</b>
        </p>
      </div>
      <div className="dtest">
        <div className="dtestf"><b>Patient Health Questionnaire (PHQ-9)</b></div>
        <div className="dtestfrst">Over the last two weeks, how often have you been bothered by any of the following problems?</div>
        <div className='questions'>
         <div className="queuess qone">
          <span>Little interest or pleasure in doing things?</span>
          <div className="qoptions optone">
          <button className="optbtn" value="0"onClick={optbtnClick} >Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>

         </div>
         <div className="queuess qtwo">
          <span>Feeling down, depressed, or hopeless?</span>
          <div className="qoptions optwo">
          <button className="optbtn" value="0" onClick={optbtnClick}>Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>

         </div>
         <div className="queuess qthree">
          <span>Trouble falling or staying asleep, or sleeping too much?</span>
          <div className="qoptions opthree">
          <button className="optbtn" value="0" onClick={optbtnClick}>Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>

         </div>
         <div className="queuess qfour">
          <span>Feeling tired or having little energy?</span>
          <div className="qoptions optfour">
          <button className="optbtn" value="0" onClick={optbtnClick}>Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>

         </div>
         <div className="queuess qfive">
          <span>Poor appetite or overeating?</span>
          <div className="qoptions optfive">
          <button className="optbtn" value="0" onClick={optbtnClick}>Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>

         </div>
         <div className="queuess qsix">
          <span>Feeling bad about yourself - or that you are a failure or have let yourself or your family down?</span>
          <div className="qoptions optsix">
          <button className="optbtn" value="0" onClick={optbtnClick}>Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>

         </div>
         <div className="queuess qseven">
          <span>Trouble concentrating on things, such as reading the newspaper or watching television?</span>
          <div className="qoptions optseven">
          <button className="optbtn" value="0" onClick={optbtnClick}>Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>

         </div>
         <div className="queuess qeight">
          <span>Moving or speaking so slowly that other people could have noticed?
Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?</span>
          <div className="qoptions opteight">
          <button className="optbtn" value="0" onClick={optbtnClick}>Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>

         </div>
         <div className="queuess qnine">
          <span>Thoughts that you would be better off dead, or of hurting yourself in some way?</span>
          <div className="qoptions optnine">
          <button className="optbtn" value="0" onClick={optbtnClick}>Not at all</button>
          <button className="optbtn" value="1" onClick={optbtnClick}>Several Days</button>
          <button className="optbtn" value="2" onClick={optbtnClick}>More than half the days</button>
          <button className="optbtn" value="3" onClick={optbtnClick}>Every day</button>
          </div>
         </div>

         <div className="resultsec">
          <div className="hold">Total = <div id='ansNum' className="ansNum">0</div>/ 27</div>
          <div className="ansTxt">None</div>
         </div>
         <div className="edusec">
         Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.
         </div>
        
        </div>
      </div>
      <div className='ddisclaimer'>
        <p><b>Disclaimer</b>: This article is for information only and should not be used for the diagnosis
           or treatment of medical conditions. Egton Medical Information Systems Limited has used all 
           reasonable care in compiling the information but make no warranty as to its accuracy. 
           Consult a doctor or other health care professional for diagnosis and treatment of medical 
           conditions.</p>
      </div>
      <div className='dcontacts'>
        <i>It takes the whole of life to learn how to live, and -what will perhaps make you wonder more - it takes the whole of life to learn how to die.</i>
        <div className='footicons'>
          <table>
            <tr><td ><b>Helpline Sites</b></td><td ><b>Helpline Numbers</b></td></tr>
<tr><td><a href="http://aasra.info/" target='_blank'>aasra</a></td><td>91-9820466726</td></tr>
<tr><td><a href="https://icallhelpline.org/" target='_blank'>iCall</a></td><td>9152987821</td></tr>
<tr><td></td><td>1800-5990019</td></tr>
          </table>
        </div>
        <span className='hust'><i>just think again...</i></span>
      </div>
     </div>
  );
}

export default App;
