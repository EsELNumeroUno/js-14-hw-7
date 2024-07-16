import React, {useState} from 'react';
import './App.css'
import Title from "./UI/Title.jsx";
import Button from "./UI/Button/Button.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Input from "./UI/Input.jsx";
import AppSpinner from "./UI/AppSpinner/AppSpinner.jsx";

// https://new-state-blond.vercel.app/
// мурда жасалган домашка

const App = () => {
    // const [data, setData] = useState({
    //     first: false,
    //     second: 0,
    //     third: false,
    //     fourth: false,
    //     fifth: false,
    //     sixth: '',
    //     seventh: '',
    //     eighth: '',
    // })

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [fifth, setFifth] = useState(false)
    const [sixth, setSixth] = useState('')
    const [seventh, setSeventh] = useState('')
    const eighthData = [
        {
            id: 1,
            title: 'Task 1',
            isCompleted: false,
        },
        {
            id: 2,
            title: 'Task 2',
            isCompleted: true,
        },
        {
            id: 3,
            title: 'Task 3',
            isCompleted: false,
        },
        {
            id: 4,
            title: 'Task 4',
            isCompleted: true,
        },
    ]
    const [eighth, setEighth] = useState(eighthData)


    function firstMoveHandler() {
        // setData((prev)=>{
        //     return {
        //         ...prev,
        //         first: prev.first? false: true
        //     }
        // })
        setFirst(prevState => !prevState)
    }

    // неудачная попытка
    function secondMoveHandler(param) {
        if (param === 'Increment'){
            setSecond(prevState => {
                return prevState = prevState + 1
            })
        } else if (param === 'Decrement'){
            setSecond(prevState => {
                return prevState = prevState - 1
            })
        }
    }
    // function secondIncrementHandler() {
    //     // setData(prevState => {
    //     //     return{
    //     //         ...prevState,
    //     //         second: prevState += 1
    //     //     }
    //     // })
    //
    // }
    // function secondDecrementHandler() {
    //     // setData(prevState => {
    //     //     return{
    //     //         ...prevState,
    //     //         second: prevState -= 1
    //     //     }
    //     // })
    // }

    function thirdMoveHandler() {
        setThird(prevState => !prevState)
    }

    function fourthMoveHandler() {
        setFourth(prevState => !prevState)
    }

    function fifthMoveHandler() {
        setFifth(prevState => !prevState)
    }


    console.log('re-render')
    const sixthData= ['HOME','ABOUT','CONTACT']
    function sixthMoveHandler(param) {
        sixthData.map((item)=>{
            if (param === item){
                setSixth(prevState => {
                    return item
                })
            }
        })
    }


    const seventhData = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
    ]
    function seventhMoveHandler(param) {
        seventhData.map((item)=>{
            if (param === item){
                setSeventh(prevState => {
                    return item
                })
            }
        })
    }



    // eighth task
    const showAll = () => setEighth(eighthData)
    const showCompleted = () => setEighth(eighthData.filter(eighthData => eighthData.isCompleted))
    const showUnCompleted = () => setEighth(eighthData.filter(eighthData => !eighthData.isCompleted))


    return (
        <div style={{height: '100vh',background: third? 'black':'white', color: third? 'white': 'black'}}>
            <Wrapper title={'Биринчи'}>
                <Button onClick={firstMoveHandler} textCase={'upperCase'}>{first? 'close': 'open'}</Button>
            </Wrapper>

            {/*неудачная попытка*/}
            <Wrapper title={'Экинчи'}>
                <Button onClick={secondMoveHandler}>{'Increment'}</Button>
                <h1>{second}</h1>
                <Button onClick={secondMoveHandler}>{'Decrement'}</Button>
            </Wrapper>
            {/*<Wrapper title={'Экинчи'}>*/}
            {/*    <Button onClick={secondIncrementHandler} textCase={'upperCase'}>{'Increment'}</Button>*/}
            {/*    <h1>{second}</h1>*/}
            {/*    <Button onClick={secondDecrementHandler} textCase={'upperCase'}>{'Decrement'}</Button>*/}
            {/*</Wrapper>*/}

            <Wrapper title={'Учунчу'}><Input type={'checkbox'} onChange={thirdMoveHandler}/></Wrapper>

            <Wrapper title={'Тортунчу'}>
                <div >
                    {fourth && <h2>Upps!</h2>}
                    <Button onClick={fourthMoveHandler}>{fourth?'Close':'Open'}</Button>
                </div>
            </Wrapper>

            <Wrapper title={'Бешинчи'}>
                <div className={'app-animation'}>
                    <Button textCase={'upperCase'} onClick={fifthMoveHandler}>Start</Button>
                    {fifth && <AppSpinner/>}
                </div>
            </Wrapper>

            <Wrapper title={'Алтынчы'}>
                <div >
                    {sixthData.map((item,id)=>(
                        <Button key={id} textCase={'upperCase'} onClick={sixthMoveHandler}>{item}</Button>
                    ))}
                    <h1>{sixth}</h1>
                </div>
            </Wrapper>

            <Wrapper title={'Жетинчи'}>
                <div >
                    <div style={{display: 'flex', columnGap: '5px'}}>
                        {seventhData.map((item, id)=>(
                            <Button variant={'outline'} key={id} onClick={seventhMoveHandler}>{item}</Button>
                        ))}
                    </div>

                    <p style={{marginTop: '20px'}}>
                        {seventh&& 'You selected: '}
                        <span style={{background: '#f2f7f6', color: '#77a7d0'}}>
                            {seventh}
                        </span>
                    </p>
                </div>
            </Wrapper>

            <Wrapper title={'Сегизинчи'}>
                <div>
                    <Button onClick={showAll}>All</Button>
                    <Button onClick={showCompleted}>Completed</Button>
                    <Button onClick={showUnCompleted}>Uncompleted</Button>
                    <div style={{marginTop: '15px'}}>
                        {eighth.map(({title, isCompleted, id})=>(
                            <p key={id}>
                                {title} {isCompleted ? 'COMPLETED': 'NOT COMPLETED'}
                            </p>
                        ))}
                    </div>
                </div>
            </Wrapper>

        </div>
    );
};

export default App;