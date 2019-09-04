import React, { Component } from 'react'
import { connect } from "react-redux";
import { Accordion,Checkbox } from 'semantic-ui-react'


class MenuList extends Component {
//   state = { activeIndex: "" }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


  renderAccordion(activeIndex,title,content){
      return (
        <Accordion>
            <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
            >
                <Checkbox label={title} />
            </Accordion.Title>

            <Accordion.Content active={activeIndex === 0}>
                <p>
                {content}
                </p>
            </Accordion.Content>
    </Accordion>
      );
  }

  renderMenu() {
     const { activeIndex } = this.props.activeIndex
      return this.props.menu.map(menuItem => {
        return(
            <Accordion>
                <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
                >
                <Checkbox label={menuItem.name} />
                
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                <p>
                {
                   menuItem.choices.map(subMenu=>{
                       return(
                        this.renderAccordion(activeIndex,subMenu.name,[])) 
                    })
                }
                
                </p>
                </Accordion.Content>
            </Accordion>
        );
      }
      );
  }

  render() {

    return (
        <React.Fragment>
            {this.renderMenu()}
        </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
    console.log(state);
    return { menu: state.menu.menuList,activeIndex:state.menu.activeIndex };
  };
  
export default connect(mapStateToProps,{ })(MenuList);