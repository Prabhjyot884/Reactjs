import {Component} from 'react'
import  '../Styles/Medi.css';
import medi from '../assests/medi.mp4'
import Medita from './Medita';

const initialState = {
  isTimerRunning: false,
  timeElapsedInSeconds: 0,
  timerLimitInMinutes: 25,
}

class DigitalTimer extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onDecreaseTimerLimitInMinutes = () => {
    const {timerLimitInMinutes} = this.state

    if (timerLimitInMinutes > 1) {
      this.setState(prevState => ({
        timerLimitInMinutes: prevState.timerLimitInMinutes - 1,
      }))
    }
  }

  onIncreaseTimerLimitInMinutes = () =>
    this.setState(prevState => ({
      timerLimitInMinutes: prevState.timerLimitInMinutes + 1,
    }))

  renderTimerLimitController = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const isButtonsDisabled = timeElapsedInSeconds > 0

    return (
        <div class="bg-white dark:bg-gray-100 rounded-lg px-6 py-9 pt-11 ring-1 ring-slate-900/5 shadow-xl h-45">  
      <div className="timer-limit-controller-container space-y-5 ">
        <p className="limit-label ">Set Timer limit</p>
        <div className="timer-limit-controller">
          <button
            className="limit-controller-button"
            disabled={isButtonsDisabled}
            onClick={this.onDecreaseTimerLimitInMinutes}
            type="button"
          >
            -
          </button>
          <div className="limit-label-and-value-container">
            <p className="limit-value">{timerLimitInMinutes}</p>
          </div>
          <button
            className="limit-controller-button"
            disabled={isButtonsDisabled}
            onClick={this.onIncreaseTimerLimitInMinutes}
            type="button"
          >
            +
          </button>
        </div>
      </div>
      </div>
    )
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  incrementTimeElapsedInSeconds = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  onStartOrPauseTimer = () => {
    const {
      isTimerRunning,
      timeElapsedInSeconds,
      timerLimitInMinutes,
    } = this.state
    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60

    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }
    if (isTimerRunning) {
      this.clearTimerInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  renderTimerController = () => {
    const {isTimerRunning} = this.state
    const startOrPauseImageUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startOrPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'

    return (
        <div class="bg-white dark:bg-gray-100 rounded-lg px-4 py-4 ring-1 ring-slate-900/5 shadow-xl"> 
      <div className="timer-controller-container">
        <button
          className="timer-controller-btn"
          onClick={this.onStartOrPauseTimer}
          type="button"
        >
          <img
            alt={startOrPauseAltText}
            className="timer-controller-icon"
            src={startOrPauseImageUrl}
          />
          <p className="timer-controller-label">
            {isTimerRunning ? 'Pause' : 'Start'}
          </p>
        </button>
        <button
          className="timer-controller-btn"
          onClick={this.onResetTimer}
          type="button"
        >
          <img
            alt="reset icon"
            className="timer-controller-icon"
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
          />
          <p className="timer-controller-label">Reset</p>
        </button>
      </div>
      </div>
    )
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
    const totalRemainingSeconds =
      timerLimitInMinutes * 60 - timeElapsedInSeconds
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    const labelText = isTimerRunning ? 'Running' : 'Paused'
    
    return (
      <div>
      <Medita />
      <div className=' w-full bg-transparent py-40 bg-sky-50' >
      <div className='w-full h-[660px] dark:bg-slate-900 py-28 px-4' >
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <video className='w-[900px] h-96 rounded-xl mx-auto my-4'
       src={medi} autoPlay
       loop />
      <div>
       <h1 className='px-10 py-3 mr-10 text-white'>Benefits of meditation</h1>
       <br></br>
       <p className='px-10 py-1 mr-10 text-white'>
       Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health.
       You can also use it to relax and cope with stress by refocusing your attention on something calming. 
       Meditation can help you learn to stay centered and keep inner peace.

        And these benefits don't end when your meditation session ends.
        Meditation can help carry you more calmly through your day. And meditation may help you manage symptoms of certain medical conditions.
       </p>
      </div>
      </div>
      </div>
      <div className=' w-full bg-transparent py-32'>
        <h2 className=' text-center text-slate-900 mb-6'>How to Start Meditation</h2>
        <div className=' grid md:grid-cols-5'>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl h-[460px]'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-10'>Step-1</span>
          <div className=' py-10 content-center items-center'>
            <p className=' text-center text-lg'>Set aside twenty five minutes for your heart time.
             If possible, always meditate at the same time, in the same place, to keep your practice consistent and create a calm space that you can return to each day.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl h-[460px]'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-10'>Step-2</span>
          <div className=' py-10 content-center items-center'>
            <p className=' text-center text-lg'>Sit comfortably with your hands and legs drawn in close. Just focus on feeling peaceful and relaxed. 
            Let your arms rest and land wherever is most comfortable.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl h-[460px] '>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-10'>Step-3</span>
          <div className=' py-9 content-center items-center'>
            <p className=' text-center text-lg'>Take a minute to listen to your heart. Close your eyes gently and feel the already present Source of Light lighting and expanding to catch your attention.
You will sense a vibration and energy descending into you as you focus on the subtle idea of lightness in your heart.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-10'>Step-4</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-lg'>As your mind wanders, gently return to this focus of light in the heart.
             Thoughts that arise will naturally fall away and not trouble you after some time of practice.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-10'>Step-5</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-lg'>Upon completion of your meditation, take a few moments to reflect on the practice. 
            As you move through your day you will find yourself connecting to your heart space.</p>
          </div>
        </div>
      </div>
        </div>
      <div className="app-container w-full h-auto relative py-26 rounded-2xl">
        <h1 className="text-6xl justify-center mb-6 font-normal text-slate-800 ">Meditation Timer</h1>
        <h3 className='justify-center text-2xl mb-6 text-slate-700'>Meditation and mindfulness for any mind, any mood, any goal</h3>
        <div class="bg-white dark:bg-transparent rounded-lg px-20 py-12 ring-1 ring-slate-900/5 shadow-xl place-content-center "> 
        <div className="digital-timer-container dark:bg-gradient-to-r from-slate-900 to-blue-800/80 opacity-85  rounded-xl accent-lime-100 ;">

          <div className="timer-display-container mr-14">
            <div className="elapsed-time-container">
              <h1 className="elapsed-time">
                {this.getElapsedSecondsInTimeFormat()}
              </h1>
              <p className="timer-state">{labelText}</p>
            </div>
          </div>
          <div className="controls-container">
            {this.renderTimerController()}<br></br>
            {this.renderTimerLimitController()}
          </div>
        </div>
      </div>
      <br></br><br></br>
      <h2 className=' text-slate-700 py-12'> FOUR DAILY PRACTICE</h2>
      <div className=' grid md:grid-cols-4'>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-14'>Relaxtion</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-xl'>Learning to relax is vital for well-being. 
            It reduces tension in all parts of your body and helps you to stay balanced even in stressful situations.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-16'>Meditation</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-xl'>With regular Meditation, your mind will become centered and shift to deeper levels of feeling, intuition and consciousness.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-16'>Cleaning</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-xl'>Cleaning fosters lightness of being, joy and a carefree attitude, as emotional burdens, habits, deep conditioning and complexities are removed.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 bg-indigo-100 rounded-2xl ml-10'>Inner Connect</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-xl'>Through a simple bedtime prayerful intention, you can connect humbly with your inner self, listen to your heart’s voice, and weave your destiny.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
     </div> 
    )
  }
}

export default DigitalTimer