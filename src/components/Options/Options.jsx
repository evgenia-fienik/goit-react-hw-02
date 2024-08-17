 import css from '../../components/Options/Options.module.css'
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <div>
            <button className={css.btn} onClick={() => updateFeedback('good')}>Good</button>
            <button className={css.btn} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && (
                <button className={css.btn} onClick={resetFeedback}>Reset</button>
            )}
       
        </div>
    );
}
export default Options;