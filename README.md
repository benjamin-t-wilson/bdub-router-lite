# @bdub/router-lite
This library includes a single, simple hook for routing in React
***
### How to use

There is an example in App.jsx in this repo, but the code is simple to implement. First, import the hook
`import useRouterLite from "@bdub/router-lite";`

Then, create your routes array. This is an array of objects with a string `path` and function `action`. Action will always be provided an argument `data`, this name is not important, but to receive props you must spread it in.
```
const routes = [
    { path: "/", action: (data) => <Home {...data} /> },
  ];
  ```

Lastly, use the hook, and return the result.
```
const  renderedElement  =  useRouterLite(routes);
return  renderedElement;
```

***
### How to link to another page
Simply use an anchor tag
`<a href="/test">test</a>`
***
### How to navigate from a function
All components should have the `data` props spread in, which includes `navigateTo`. Use it as follows:
```
const doSomethingThenNavigate = () => {
	let do = 'something'
	props.navigateTo("/")
}
```
***
### How to pass a parameter in route
Declare the route as follows:
`{ path: "/test/:id", action: (data) =>  <Test {...data} /> }`
The `:id` parameter will be available as `props.params.id`
***
### How to provide additional (or async) data to component
Declare the route as follows:
```
{
  path: "/motd",
  action: async (data) => {
    const resp = await fetch("https://api.chucknorris.io/jokes/random");
    const json = await resp.json();
    data.message = json;
    return <Motd {...data} />;
  },
},
```
The result of the async function is available as `props.message` in the component
