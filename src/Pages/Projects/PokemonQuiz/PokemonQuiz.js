import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const Checkbox = ({label, name, value, onChange}) => {
    const handleChange = () => onChange(name, !value)
    return (
        <span
            className={`tag is-large pokemon-${value ? 'selected' : 'unselected'} p-2 no-select`}
            onClick={handleChange}
        >
            {label}
        </span>
    )
}

const QuizSetupForm = ({formConfig}) => {
    const [checkboxes, setCheckboxes] = useState({
        "all": true,
        "whos-that-pokemon": true,
        "pokemon-types": true,
        "pokemon-type-match-ups": true,
        "items": true,
        "locations": true,
    })
    const [numberOfQuestions, setNumberOfQuestions] = useState(25);
    const formSubmit = e => {
        e.preventDefault()
        formConfig({...checkboxes, numberOfQuestions})
    }

    const handleUpdate = (name, checked) => setCheckboxes(prevState => {
        if (name === "all") Object.keys(prevState).forEach(field => {
            prevState[field] = checked
        })
        else if (prevState?.all) {
            prevState.all = false
            prevState[name] = checked
        }
        else {
            let allSelected = true
            prevState[name] = checked
            Object.keys(prevState).forEach(field => allSelected &= (field === "all" || prevState[field]))
            if (allSelected) prevState.all = true
        }
        return {...prevState}
    })
    return (
        <form>
            <div className={"p-3"}>
                <div className={"columns"}>
                    <div className={"column is-full"}>
                        <h1 className={"title p-0 m-0"}>
                            Quiz Setup
                        </h1>
                    </div>
                </div>
                <hr/>
                <div className={"columns"}>
                    <div className={"column is-two-thirds"}>
                        <h4 className={"subtitle p-0 pb-1 m-0"}>Question Types</h4>
                        <div className={"tags"}>
                            <Checkbox
                                label={"All"} name={"all"}
                                value={checkboxes?.all} onChange={handleUpdate}
                            />
                            <Checkbox
                                label={"Who's That Pokémon?"} name={"whos-that-pokemon"}
                                value={checkboxes["whos-that-pokemon"]} onChange={handleUpdate}
                            />
                            <Checkbox
                                label={"Pokémon Types"} name={"pokemon-types"}
                                value={checkboxes["pokemon-types"]} onChange={handleUpdate}
                            />
                            <Checkbox
                                label={"Pokémon Type Match-Ups"} name={"pokemon-type-match-ups"}
                                value={checkboxes["pokemon-type-match-ups"]} onChange={handleUpdate}
                            />
                            <Checkbox
                                label={"Items"} name={"items"}
                                value={checkboxes?.items} onChange={handleUpdate}
                            />
                            <Checkbox
                                label={"Locations"} name={"locations"}
                                value={checkboxes?.locations} onChange={handleUpdate}
                            />
                        </div>
                    </div>
                    <div className={"column"}>
                        <h4 className={"subtitle p-0 pb-1 m-0"}>Number of Questions</h4>
                        <input
                            className={"input"}
                            style={{width: "60%"}}
                            type={"number"}
                            min={1}
                            value={numberOfQuestions}
                            onChange={e => setNumberOfQuestions(e.target.value)}
                        />
                    </div>
                </div>
                <div className={"columns"}>
                    <div className={"column is-one-fifth"}>
                        <button className={"button pokemon-submit is-fullwidth"}>
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

const PokemonQuiz = () => {
    useEffect(() => {
        document.title = "Projects - Pokémon Quiz"
    }, [])
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["Projects", "/projects"],
                    ["Pokémon Quiz", "active"]
                ]}
            />
            <section className={"hero pokemon-quiz-header p-0"}>
                <div className={"hero-body p-3"}>
                    <p className={"title"}>
                        Pokémon Quiz
                    </p>
                    <p className={"subtitle"}>
                        Test your knowledge!
                    </p>
                </div>
            </section>
            <QuizSetupForm/>
        </>
    );
};

export default PokemonQuiz;
