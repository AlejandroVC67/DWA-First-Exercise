import './mainGrid.scss'

export class Grid {
  constructor (node) {
    this.node = node
    this.jobs = JSON.parse(window.sessionStorage.getItem('person'))
    // console.log(this.person)
    // console.log(this.data)
    this.elements = {}
    this.createGridElement(this.node)
    this.elements.gridElements = this.node.querySelectorAll('.grid__element')
    this.showAllCategories(this.elements.gridElements, 'All')
  }

  static get contentStructure () {
    return {
      gridElement: (`<div class="grid__element" data-category="{cat}">
                        <div class="job">
                            <img class="job__image" src="{src}" alt="">
                            <div class="job__information-container">
                                <p class="job__information">Title: {title} </p>
                                <p class="job__information">Deadline: {deadline}</p>
                                <button></button>
                            </div>
                        </div>
                    </div>`)
    }
  }

  static get states () {
    return {
      gridElementActive: (`grid__element--active`)
    }
  }

  createGridElement (grid) {
    const jobsArray = this.jobs.map(element => {
      return Grid.contentStructure.gridElement
        .replace('{src}', element.url)
        .replace('{title}', element.title)
        .replace('{cat}', element.status)
        .replace('{deadline}', element.deadline)
    })
    grid.innerHTML = jobsArray.join('')
  }

  updateGrid (categorySelected) {
    if (categorySelected === 'All') {
      this.showAllCategories(this.elements.gridElements)
    } else {
      this.showSpecificCategory(categorySelected, this.elements.gridElements)
    }
  }

  showAllCategories (gridElements) {
    gridElements.forEach(function (element) {
      element.classList.add(Grid.states.gridElementActive)
    })
  }

  showSpecificCategory (categorySelected, gridElements) {
    gridElements.forEach(element => {
      if (element.dataset.category !== categorySelected) {
        element.classList.remove(Grid.states.gridElementActive)
      } else {
        element.classList.add(Grid.states.gridElementActive)
      }
    })
  }
}
