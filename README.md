This is a simple open-source Rails project made to replace the broken piece of the Data Analyzer from the 1973 Parker Brothers board game `Billionare`.

You can read more about it on [Hashrocket.com](https://hashrocket.com/blog/posts/creating-a-custom-mobile-integration-for-a-board-game-using-ruby-on-rails).

To run the server run `bin/dev` to compile the assets. Or if you already have the assets compiled you can just run `rails server`.

To host it on ngrok so you can access from another device, run this with your rails server running:

```sh
ngrok http 3000
```
