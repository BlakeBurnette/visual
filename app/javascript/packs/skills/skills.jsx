import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import SkillsList from './skills_list'
import SkillsCategory from './skills_category'

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const skillSections = []
    let skills = this.props.skills

    this.props.skills.forEach((skill) => {
      if (skill.category !== null) {
        skillSections.push(
          <div className="col offset-l3 l6 offset-m2 m8 s12 experience-types">
            <SkillsCategory
              categoryName={skill.category.name}
              key={skill.category.id} />
            <SkillsList
              skillsList={skill.category.skills}
              key={skill.category.name} />
          </div>
        )
      }
    });

    return (
      <div className="col s12">
        {skillSections}
      </div>
    );
  }
}

// this needs to get moved to an API call
const SKILLS = [
  {
    category: {
      name: "Javascript",
      id: "javascript",
      skills: [
        {
          "name":"ES2017",
          "id":"ES2017"
        },
        {
          "name":"React",
          "id":"React"
        },
        {
          "name":"Angularjs",
          "id":"Angularjs"
        },
        {
          "name":"jQuery",
          "id":"jQuery"
        }
      ]
    }
  },
  {
    category: {
      name: "CSS",
      id: "css",
      skills: [
        {
          "name":"Sass/Less",
          "id":"Sass/Less"
        },
        {
          "name":"Bootstrap",
          "id":"Bootstrap"
        },
        {
          "name":"Materialize",
          "id":"Materialize"
        },
        {
          "name":"Transitions/Keyframes",
          "id":"Transitions/Keyframes"
        }
      ]
    }
  },
  {
    category: {
      name: "Server-side",
      id: "server-side",
      skills: [
        {
          "name":"Ruby",
          "id":"Ruby"
        },
        {
          "name":"Rails",
          "id":"Rails"
        }
      ]
    }
  },
  {
    category: {
      name: "Testing",
      id: "testing",
      skills: [
        {
          "name":"RSpec",
          "id":"RSpec"
        },
        {
          "name":"Minitest",
          "id":"Minitest"
        },
        {
          "name":"Capybara",
          "id":"Capybara"
        },
        {
          "name":"Poltergeist",
          "id":"Poltergeist"
        }
      ]
    }
  },
  {
    category: {
      name: "Continuous Integration",
      id: "ci",
      skills: [
        {
          "name":"Travis CI",
          "id":"Travis CI"
        },
        {
          "name":"Semaphore",
          "id":"Semaphore"
        }
      ]
    }
  },
  {
    category: {
      name: "CMS",
      id: "cms",
      skills: [
        {
          "name":"Wordpress",
          "id":"Wordpress"
        },
        {
          "name":"Drupal",
          "id":"Drupal"
        },
        {
          "name":"Four51",
          "id":"Four51"
        }
      ]
    }
  }
]

ReactDOM.render(
  <Skills skills={SKILLS} />,
  document.getElementById('skillsList')
);
