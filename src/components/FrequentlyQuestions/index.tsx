import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { questionSlice, QUESTION_OPENED } from '../../store/slices/FirstQuestion'
import { FirstQuestion } from './FirstQuestion'
import classes from './styles.module.scss'

export const FrequentlyQuestions = () => {
    const dispatch = useDispatch()
    const opened = useSelector(QUESTION_OPENED)

    const handleToggle = useCallback(() => dispatch(questionSlice.actions.toggle()), [dispatch])
    return (
        <div className={classes.box}>
            <div className={classes.title}>Frequently Asked Questions</div>
            <div className={classes.border}></div>
            <div className={classes.firstQuestion}>
                <div className={classes.block}>
                    <button onClick={handleToggle} className={classes.firstTitle}>Can I return my furniture?</button>
                    {opened ? <FirstQuestion /> : null}
                </div>
                <div className={classes.firstPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.secondQuestion}>
                <button className={classes.secondTitle}>Can your furniture be left outside?</button>
                <div className={classes.secondPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.thirdQuestion}>
                <button className={classes.thirdTitle}>What does powder coated mean?</button>
                <div className={classes.thirdPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.fourthQuestion}>
                <button className={classes.fourthTitle}>What is thermosetting polymer?</button>
                <div className={classes.fourthPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.fifthQuestion}>
                <button className={classes.fifthTitle}>Are your cushions machine washable?</button>
                <div className={classes.fifthPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.sixthQuestion}>
                <button className={classes.sixthTitle}>Do the products fade in sunlight?</button>
                <div className={classes.sixthPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.seventhQuestion}>
                <button className={classes.seventhTitle}>How do I care for my furniture?</button>
                <div className={classes.seventhPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.eightQuestion}>
                <button className={classes.eightTitle}>Is the furniture ‘flat packed’ or ‘fully assembled’?</button>
                <div className={classes.eightPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.ninthQuestion}>
                <button className={classes.ninthTitle}>When can I expect my item to be delivered?</button>
                <div className={classes.ninthPlus}>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5352 8.40454H26.4648C26.7253 8.40454 26.8555 8.53475 26.8555 8.79517V43.1702C26.8555 43.4306 26.7253 43.5608 26.4648 43.5608H23.5352C23.2747 43.5608 23.1445 43.4306 23.1445 43.1702V8.79517C23.1445 8.53475 23.2747 8.40454 23.5352 8.40454Z" fill="#888887" />
                        <path d="M8.59375 24.1272H41.4062C41.6667 24.1272 41.7969 24.2574 41.7969 24.5178V27.4475C41.7969 27.7079 41.6667 27.8381 41.4062 27.8381H8.59375C8.33333 27.8381 8.20312 27.7079 8.20312 27.4475V24.5178C8.20312 24.2574 8.33333 24.1272 8.59375 24.1272Z" fill="#888887" />
                    </svg>
                </div>
            </div>
            <div className={classes.border}></div>
        </div>
    )
}