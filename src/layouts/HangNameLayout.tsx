import { Box,Tooltip } from '@mui/material';
import React, { ReactNode, useState, useEffect } from 'react';

const Footer = () => (
  <div className='footer' style={{position:"fixed", background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%)", bottom:0, width:"100%", height:"216px", display:"flex",
    justifyContent: "space-between", alignItems: "center", padding: "0 10%", color:"#ECECEC"}}>
    <div style={{display:"flex"}}>
      <img src="/layout_avatar.svg" alt="" srcSet="" style={{marginBottom:"30px"}} />
      <div style={{marginTop: "50px", marginLeft:"20px"}}>
        <div style={{color: "#C8C8C8", width: "104px", height: "32px", background: "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%)"}}>Zack</div>
        <div style={{lineHeight: "30px"}}>Hello, there happens to be a seat here, please take a seat</div>
      </div>
    </div>
    <div>
      <img src="/footer_bottom.svg" alt="" srcSet="" />
    </div>
  </div>
);

const InputName = ({ onContinue }) => {
  const [inputValue, setInputValue] = useState('');

  const handleName = () => {
    if (inputValue.trim() !== '') {
      onContinue();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder='Please enter your name'
        style={{
          width: "480px",
          height: "50px",
          background: "rgba(0, 0, 0, 0.8)",
          border: "2px solid rgba(255, 255, 255, 0.4)",
          color: "#ececec",
          marginBottom: "20px",
          outline: "none",
          paddingLeft: "20px",
          borderRadius: "10px",
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div
        onClick={handleName}
        style={{
          backgroundImage: "url(/continue_bg.svg)",
          width: "480px",
          height: "64px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Continue
      </div>
    </>
  );
};



const QuestionComponent = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      text: 'Question 1: Select from the following games:',
      type: 'divSelect',
      options: [
        'Undertale',
        'Genshin Impact',
        'GTA5 Pok é mon',
        'Elden Ring',
        'Jile Disco',
        'Plants vs. Zombies',
        'Honor of Kings',
        'Zelda: Breath of the Wilderness CS GO',
        'League of Legends',
        'EA-FC'
      ]
    },
    {
      text: 'Question 2: What is your favorite color?',
      type: 'input'
    },
    {
      text: 'Question 3: Do you like reading books? (Yes/No)',
      type: 'divSelect',
      options: ['Yes', 'No']
    },
    {
      text: 'Question 4: How often do you exercise?',
      type: 'input'
    },
    {
      text: 'Question 5: What is your hobby? You can select from the options or enter your own.',
      type: 'mixed',
      options: ['Drawing', 'Playing Music', 'Reading Novels', 'Coding']
    }
  ];

  const handleAnswerChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleContinueClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 当到达最后一道题时，获取所有答案
      console.log(answers);
      onComplete();
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    if (question.type === 'divSelect') {
      return (
        <div>
          <p>{question.text}</p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {question.options.map((option, index) => (
              <div
                key={index}
                style={{
                  cursor: 'pointer',
                  padding: '16px 24px',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '8px',
                  color: answers[currentQuestionIndex] === option? 'black' : '#FFFFFF',
                  backgroundColor: answers[currentQuestionIndex] === option? '#FFFFFF' : 'transparent',
                }}
                onClick={() => handleAnswerChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      );
    } else if (question.type === 'input') {
      return (
        <div>
          <p>{question.text}</p>
          <input
            style={{
              width: "80%",
              height: "50px",
              background: "rgba(0, 0, 0, 0.8)",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              color: "#ececec",
              marginBottom: "20px",
              outline: "none",
              paddingLeft: "20px",
              borderRadius: "10px",
            }}
            type="text"
            onChange={(e) => handleAnswerChange(e.target.value)}
          />
        </div>
      );
    } else if (question.type === 'mixed') {
      return (
        <div>
          <p>{question.text}</p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {question.options.map((option, index) => (
              <div
                key={index}
                style={{
                  cursor: 'pointer',
                  padding: '16px 24px',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '8px',
                  color: answers[currentQuestionIndex] === option? 'black' : '#FFFFFF',
                  backgroundColor: answers[currentQuestionIndex] === option? '#FFFFFF' : 'transparent',
                }}
                onClick={() => handleAnswerChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <input
            style={{
              width: "80%",
              height: "50px",
              background: "rgba(0, 0, 0, 0.8)",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              color: "#ececec",
              marginBottom: "20px",
              outline: "none",
              paddingLeft: "20px",
              borderRadius: "10px",
              marginTop: "24px"
            }}
            type="text"
            onChange={(e) => handleAnswerChange(e.target.value)}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div style={{position:"fixed",display:"flex",alignItems:'center',justifyContent:"center",left:"35%",border:"2px solid #C8C8C8", borderTop:"none", color:"#fff",width:"440px",background:"rgba(0,0,0,0.72)"}}>
        <p>Upload Progress</p>
        <div style={{margin:'0 10px', width: '40%', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
          <div style={{ width: `${currentQuestionIndex * 20}%`, height: '8px', backgroundColor: '#FFFFFF',  }}></div>
        </div>
        <div style={{ position: 'relative' }}>
          {`${currentQuestionIndex * 20}%`}
        </div>
      </div>
      <div style={{position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '872px', padding: '24px', background: 'rgba(0, 0, 0, 0.8)', borderRadius: '4px', border: "1px solid #C8C8C8", color: '#fff' }}>
        {renderQuestion()}
        <div onClick={handleContinueClick} style={{ width: '50%', height: '64px', margin: '24px 0', borderRadius: '16px', lineHeight: '64px', cursor: 'pointer', textAlign: 'center', background: '#fff', color: '#000' }}>Continue</div>
      </div>
    </div>
  );
};

const AddFriend = ({ onComplete }) => {
  const [activeButton, setActiveButton] = useState('addFriend');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: "576px",
      padding: '24px',
      background: 'rgba(0, 0, 0, 0.8)',
      borderRadius: '16px',
      color: '#fff'
    }}>
      <div style={{ display: 'flex' }}>
        <button
          style={{
            width: '40%',
            marginRight: '10px',
            padding: '15px 30px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: activeButton === 'addFriend' ? 'white' : '#333',
            color: activeButton === 'addFriend' ? 'black' : 'white',
            border: 'none'
          }}
          onClick={() => handleButtonClick('addFriend')}
        >
          Add friend
        </button>
        <button
          style={{
            width: '40%',
            padding: '15px 30px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: activeButton === 'refuse' ? 'white' : '#333',
            color: activeButton === 'refuse' ? 'black' : 'white',
            border: 'none'
          }}
          onClick={() => handleButtonClick('refuse')}
        >
          Refuse
        </button>
      </div>
      <button
        style={{
          width: "100%",
          padding: '15px 30px',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          marginTop: '20px'
        }}
        onClick={onComplete}
      >
        Continue
      </button>
    </div>
  );
};


const calculateAreaPosition = (area, windowWidth, windowHeight) => {
  const x = parseFloat(area.x) * (windowWidth || 100) / 100;
  const y = parseFloat(area.y) * (windowHeight || 100) / 100;
  const width = area.width * (windowWidth || 100) / 100;
  const height = area.height * (windowHeight || 100) / 100;
  return { x, y, width, height };
};

const Appmain = () => {
  const [highlightedArea, setHighlightedArea] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);
  const [currentContent, setCurrentContent] = useState(null);

  const handleMouseEnter = (areaId) => {
    setHighlightedArea(areaId);
  };

  const handleMouseLeave = () => {
    setHighlightedArea(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const areas = [
    { id: 1, x: '45%', y: '22%', width: 16, height: 20 },
    { id: 2, x: '63%', y: '27%', width: 9, height: 33 },
    { id: 3, x: '75%', y: '64%', width: 10, height: 29 },
    { id: 4, x: '47%', y: '68%', width: 7, height: 16 },
  ];

  const handleClick = (areaId) => {
    setCurrentContent(areaId);
  };

  const calculateAreaPosition = (area, windowWidth, windowHeight) => {
    const x = windowWidth * parseFloat(area.x);
    const y = windowHeight * parseFloat(area.y);
    return { x, y, width: area.width, height: area.height };
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(./add_people.png)`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
        onMouseLeave={handleMouseLeave}
      >
        {areas.map((area) => {
          const { x, y, width, height } = calculateAreaPosition(area, windowWidth, windowHeight);
          return (
            <div
              key={area.id}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                left: x,
                top: y,
                width,
                height,
                borderRadius: area.id === 3? "40px 0 0 0" : "",
                boxShadow: highlightedArea === area.id && area.id!== 4? "0px 0px 16px 0px #FFEA94,0px 0px 8px 0px #FFEA94,0px 0px 12px 0px #FFEA94" : 'none',
              }}
              onMouseEnter={() => handleMouseEnter(area.id)}
              onMouseLeave={() => setHighlightedArea(null)}
              onClick={() => handleClick(area.id)}
            >
            </div>
          );
        })}
        {currentContent === 1 && <div>页面展示 1 的内容</div>}
        {currentContent === 2 && <div>页面展示 2 的内容</div>}
        {currentContent === 3 && <div>页面展示 3 的内容</div>}
        {currentContent === 4 && <div>页面展示 4 的内容</div>}
      </div>
    </div>
  );
};

export function HangNameLayout({ children }: { children: ReactNode }) {
  const [currentStage, setCurrentStage] = useState('inputName');

  useEffect(() => {
    const savedStage = localStorage.getItem('currentStage');
    setCurrentStage(savedStage || 'inputName');
  }, []);

  useEffect(() => {
    localStorage.setItem('currentStage', currentStage);
  }, [currentStage]);

  const handleContinue = () => {
    if (currentStage === 'inputName') {
      setCurrentStage('questions');
    } else if (currentStage === 'questions') {
      setCurrentStage('addFriend');
    } else if (currentStage === 'addFriend') {
      setCurrentStage('appMain');
    }
  };

  return (
    <div>
      {currentStage !== 'appMain' && (
        <img
          src="/layout_bg.png"
          alt="bg"
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      <div style={{ position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {currentStage === 'inputName' && <InputName onContinue={handleContinue} />}
        {currentStage === 'addFriend' && <AddFriend onComplete={handleContinue} />}
      </div>
      {currentStage === 'questions' && <QuestionComponent onComplete={handleContinue} />}
      {currentStage === 'appMain' && <Appmain />}
      {currentStage !== 'appMain' && <Footer />}
    </div>
  );
}