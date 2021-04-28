
export default function Loading(){

    return (
        <div className='loading-box'>
          <div className='light light1'></div>
          <div className='light light2'></div>
          <div className='light light3'></div>
          <div className='light light4'></div>
          <div className='light light5'></div>
          <style jsx>{`
          .loading-box{
            display:flex;
            flex-direction:row;
            margin-top:50px;
            margin-bottom:50px;
            margin-left:35%;
            margin-right:35%;
            justify-content:center;
            background-color:black;
            border:1px solid rgb(32, 32, 32);
          }
          .light{
            background: red;
            background-image: radial-gradient(brown, transparent);
            background-size: 5px 5px; 
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin:5px;
          }
          .light1{
            animation: 5.5s light1 infinite;
          }
          @keyframes light1{
            0%{opacity: .1;}
            14%{opacity: 1;}
            28%{opacity: 1;}
            42%{opacity: 1;}
            56%{opacity: 1;}
            70%{opacity: 1;}
            84%{opacity: 1;}
            95%{opacity: .1;}
            100%{opacity: .1;}
          }  
          
          .light2{
            animation: 5.5s light2 infinite;
          }
          @keyframes light2{
            0%{opacity: .1;}
            14%{opacity: .1;}
            28%{opacity: 1;}
            42%{opacity: 1;}
            56%{opacity: 1;}
            70%{opacity: 1;}
            84%{opacity: 1;}
            95%{opacity: .1;}
            100%{opacity: .1;}
          }
          .light3{
            animation: 5.5s light3 infinite;
          }
          @keyframes light3{
            0%{opacity: .1;}
            14%{opacity: .1;}
            28%{opacity: .1;}
            42%{opacity: 1;}
            56%{opacity: 1;}
            70%{opacity: 1;}
            84%{opacity: 1;}
            95%{opacity: .1;}
            100%{opacity: .1;}
          }
          .light4{
            animation: 5.5s light4 infinite;
          }
          @keyframes light4{
            0%{opacity: .1;}
            14%{opacity: .1;}
            28%{opacity: .1;}
            42%{opacity: .1;}
            56%{opacity: 1;}
            70%{opacity: 1;}
            84%{opacity: 1;}
            95%{opacity: .1;}
            100%{opacity: .1;}
          }
          .light5{
            animation: 5.5s light5 infinite;
          }
          @keyframes light5{
            0%{opacity: .1;}
            14%{opacity: .1;}
            28%{opacity: .1;}
            42%{opacity: .1;}
            56%{opacity: .1;}
            70%{opacity: 1;}
            84%{opacity: 1;}
            95%{opacity: .1;}
            100%{opacity: .1;}
          }
          `}</style>
        </div>);
}