import React, { Component } from 'react'
import { Icon, Pagination } from 'semantic-ui-react'

export default class Pager extends Component {
  state = {
    activePage: 5,
    totalPages: 50,
    siblingRange: 1,
    boundaryRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
  }

  componentWillReceiveProps(nextProps) {
    this.generatePage(nextProps.pager);
  }

  onPaginationChange = (event, { activePage }) => {
    console.log("Current activePage: ", activePage);
    this.props.onPageChange(event, {activePage});
    this.setState({ activePage });
  }
  
  generatePage = (pager) => {
    let totalPages = pager ? Math.ceil(pager.total / pager.limit) : 0;
    if (totalPages > 0) {
      let activePage = pager.limit + 1;
      this.setState({ activePage, totalPages });
    }
  }

  render() {
    const {
      activePage,
      totalPages,
      showEllipsis,
      boundaryRange
    } = this.state

    return (
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        boundaryRange={boundaryRange}
        onPageChange={this.onPaginationChange}
        // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
        ellipsisItem={showEllipsis ? undefined : null}
        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
      />
    )
  }
}