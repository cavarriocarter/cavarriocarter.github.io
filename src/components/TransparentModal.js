import React from 'react';
import { Component } from 'evergreen-ui';


const newTheme = {

<Component initialState={{ isShown: false }}>
  {({ state, setState }) => (
    <React.Fragment>
      <SideSheet
        isShown={state.isShown}
        onCloseComplete={() => setState({ isShown: false })}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
        }}

      >
    }
  }

const SideSheet = withTheme({newTheme})

        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16} borderBottom="muted">
            <Heading size={600}>Title</Heading>
            <Paragraph size={400} color="muted">
              Optional description or sub title
            </Paragraph>
          </Pane>
          <Pane display="flex" padding={8}>
            <Tablist>
               {['Traits', 'Event History', 'Identities'].map(
                  (tab, index) => (
                    <Tab
                      key={tab}
                      isSelected={state.selectedIndex === index}
                      onSelect={() => setState({ selectedIndex: index })}
                    >
                      {tab}
                    </Tab>
                  )
                )}

            </Tablist>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card
            backgroundColor="white"
            elevation={0}
            height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading>Some content</Heading>
          </Card>
        </Pane>
      </SideSheet>
      <Button onClick={() => setState({ isShown: true })}>
        Show Basic Side Sheet
      </Button>
    </React.Fragment>
  )}
</Component>
