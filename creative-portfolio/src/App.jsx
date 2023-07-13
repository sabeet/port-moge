import './App.css'
import AnimText from './AnimText'

function App() {

  return (
    <>
        <div className='wrapper'>
            <div className="section">
                <div className="columns">

                    <div className="col col-100">
                        <AnimText itemKey="id1" ogText='I am a developer' fadeOut={true}/>
                        <AnimText itemKey="id2" ogText='Sabeet.me' timelineStart="10s" delayed={true} />
                    </div>

                    <div className="col col-50">
                        <AnimText itemKey="3" ogText='So let me tell you' position='left'/>
                    </div>

                    <div className="col col-50">
                        <AnimText itemKey='4' ogText='what that means' position='right'/>
                    </div>


                    <div className="col col-33">
                        <hr />
                    </div>

                    <div className="col col-33">
                        <span>Experience</span>
                    </div>


                    <div className="col col-33">
                        <hr />
                    </div>

                    <div className="col col-33">
                        Capital One
                    </div>

                    <div className="col col-33">
                        Ally Financial
                    </div>

                    <div className="col col-33">
                        Workschool.co
                    </div>

                    <div className="col col-33">
                        <hr />
                    </div>

                    <div className="col col-33">
                        <span>Projects</span>
                    </div>

                    <div className="col col-33">
                        <hr />
                    </div>

                    <div className="col col-25">
                        Discord Bot                   
                    </div>

                    <div className="col col-25">
                        QC Prof Stat
                    </div>

                    <div className="col col-25">
                        Unity Ball Runner
                    </div>

                    <div className="col col-25">
                        Hit Me
                    </div>
                </div>
            </div>

            
        </div>

    </>
  )
}

export default App