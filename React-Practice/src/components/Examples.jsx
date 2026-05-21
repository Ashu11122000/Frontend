import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent;

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
            buttonsContainer="menu" 
            buttons={
                <><TabButton
                    isSelected={selectedTopic === "components"}
                    onSelect={() => handleSelect("components")}
                >
                    Components
                </TabButton>

                <TabButton
                    isSelected={selectedTopic === "jsx"}
                    onSelect={() => handleSelect("jsx")}
                >
                    JSX
                </TabButton>

                <TabButton
                    isSelected={selectedTopic === "props"}
                    onSelect={() => handleSelect("props")}
                >
                    Props
                </TabButton>

                <TabButton
                    isSelected={selectedTopic === "state"}
                    onSelect={() => handleSelect("state")}
                >
                    State
                </TabButton></>
            }>{tabContent}</Tabs>
        </Section>
    );
}