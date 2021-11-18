import "./portfolio.scss"

export default function portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                <div className="item">
                    <img src="https://i.ibb.co/7K4pSrw/workouttracker.png" alt=""/>
                    <h3>Workout Planner</h3>
                </div>
                <div className="item">
                    <img src="https://user-images.githubusercontent.com/84820751/135772581-f7677bb8-677d-4b0d-8861-83011fc40a73.png" alt=""/>
                    <h3>Meal Planning App</h3>
                </div>
                <div className="item">
                    <img src="https://raw.githubusercontent.com/LFewell/work-day-planner/main/work-day-planner.png" alt=""/>
                    <h3>Work Day Scheduler</h3>
                </div>
                <div className="item">
                    <img src="https://camo.githubusercontent.com/4b0c9dabcedbaec8b26ac1672d51a5936856d21154d19e80d3c5cbd63eb6c81a/68747470733a2f2f696d6775722e636f6d2f764877334941562e706e67" alt=""/>
                    <h3>Event Finder</h3>
                </div>
                <div className="item">
                    <img src="https://appwrk.com/wp-content/uploads/2019/10/ecommerce.png" alt=""/>
                    <h3>E-Commerce</h3>
                </div>
                 <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46_MKQxPJnTfEsacAR6lhq8aWLvC0uQx60w&usqp=CAU" alt=""/>
                    <h3>Employee Tracker</h3>
                </div>
            </div>
        </div>
    )
}