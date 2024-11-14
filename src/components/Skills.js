import React, { useState, useEffect, useRef } from "react";
import skillsData from "../data/skills.json";

const Skills = () => {
  const [activeMainTab, setActiveMainTab] = useState("Frontend");
  const [activeSubTab, setActiveSubTab] = useState("Programming");
  const [mainTabIndicatorStyle, setMainTabIndicatorStyle] = useState({});
  const [subTabIndicatorStyle, setSubTabIndicatorStyle] = useState({});
  const mainTabRefs = useRef({});
  const subTabRefs = useRef({});

  useEffect(() => {
    // Update indicator position for main tabs
    const mainTab = mainTabRefs.current[activeMainTab];
    if (mainTab) {
      setMainTabIndicatorStyle({
        width: `${mainTab.offsetWidth - 25}px`,
        left: `${mainTab.offsetLeft}px`,
      });
    }
  }, [activeMainTab]);

  useEffect(() => {
    // Update indicator position for sub tabs
    const subTab = subTabRefs.current[activeSubTab];
    if (subTab) {
      setSubTabIndicatorStyle({
        width: `${subTab.offsetWidth - 25}px`,
        left: `${subTab.offsetLeft}px`,
      });
    }
  }, [activeSubTab]);

  return (
    <section className="skills" id="skills">
      <h2>🛠️ My Skills</h2>

      {/* Main Tabs */}
      <div className="tabs">
        {["Frontend", "Backend", "Database"].map((tab) => (
          <button
            key={tab}
            ref={(el) => (mainTabRefs.current[tab] = el)}
            className={`tab ${activeMainTab === tab ? "active" : ""}`}
            onClick={() => setActiveMainTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="active-tab-indicator" style={mainTabIndicatorStyle}></div>
      </div>

      <div className="grid">
        {/* Display skills for the main tabs */}
        {skillsData[activeMainTab].map(({ category, skills }) => {
          const leftSkills = skills.slice(0, 3);
          const centerSkills = skills.slice(3, 6);
          const rightSkills = skills.slice(6);

          return (
            <div key={category} className="category-layout">
              <h3 className="category-name">{category}</h3>
              <div className="skills-row">
                <div className="skills-column left">
                  {leftSkills.map(({ name, icon }) => (
                    <div key={name} className="card">
                      <span className="icon">{icon}</span>
                      <span className="label">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="skills-column center">
                  {centerSkills.map(({ name, icon }) => (
                    <div key={name} className="card">
                      <span className="icon">{icon}</span>
                      <span className="label">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="skills-column right">
                  {rightSkills.map(({ name, icon }) => (
                    <div key={name} className="card">
                      <span className="icon">{icon}</span>
                      <span className="label">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sub Tabs */}
      <div className="tabs">
        {["Programming", "DevOps", "SEO/API"].map((tab) => (
          <button
            key={tab}
            ref={(el) => (subTabRefs.current[tab] = el)}
            className={`tab ${activeSubTab === tab ? "active" : ""}`}
            onClick={() => setActiveSubTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="active-tab-indicator" style={subTabIndicatorStyle}></div>
      </div>

      <div className="grid">
        {/* Display skills for the sub tabs */}
        {skillsData[activeSubTab].map(({ category, skills }) => {
          const leftSkills = skills.slice(0, 3);
          const centerSkills = skills.slice(3, 6);
          const rightSkills = skills.slice(6);

          return (
            <div key={category} className="category-layout">
              <h3 className="category-name">{category}</h3>
              <div className="skills-row">
                <div className="skills-column left">
                  {leftSkills.map(({ name, icon }) => (
                    <div key={name} className="card">
                      <span className="icon">{icon}</span>
                      <span className="label">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="skills-column center">
                  {centerSkills.map(({ name, icon }) => (
                    <div key={name} className="card">
                      <span className="icon">{icon}</span>
                      <span className="label">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="skills-column right">
                  {rightSkills.map(({ name, icon }) => (
                    <div key={name} className="card">
                      <span className="icon">{icon}</span>
                      <span className="label">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
