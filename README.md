# discord.ts handler

## discord.ts handler using typescript to code your bots better then befor

To run the bot, first make sure you've installed all the dependencies by running:

```bash
npm install
```

Then, you can start the bot by running:
```bash
npm start
```
This will start the bot and log in using the token you've set in the config.ts file.

2. Building the Project using npm run build
If you'd like to build the project and transpile the files from TypeScript to JavaScript, you can use the following command:

```bash
npm run build
```
This will compile all the files from the src folder into the dist folder, ready for execution.

3. Creating an Event File
How to Create an Event File:
Create a new folder inside the src/events folder (for example: interaction).
Inside this folder, create a new file like interactionCreate.ts, which will handle the interactionCreate event whenever any interaction occurs with the bot.
Example Event File Code:

```typescript
import { Events, Client, ActivityType } from 'discord.js';

export default {
    name: Events.ClientReady,
    async execute(client: Client) {
        console.log(`Logged in as ${client.user?.tag}!`);
        client.user?.setPresence({ activities: [{ name: 'with you', type: ActivityType.Watching }] });
    }
};
```

4. Creating a Prefix Command

Example Prefix Command Code:

```typescript
import { Client, Message } from 'discord.js';

export default {
    name: 'test',
    description: 'test',
    async execute(client: Client, message: Message, args: string[]) {
      await message.reply('test')
    }
};
```

5. Creating a Slash Command

Example Slash Command Code (Method 1):

```typescript
import { SlashCommandBuilder, CommandInteraction } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('test');
    }
};
```

Example Slash Command Code (Method 2):

```typescript
import { CommandInteraction } from 'discord.js';

export default {
    name: 'test',
    description: 'test command',
    async execute(interaction: CommandInteraction) {
        await interaction.reply('test');
    }
};
```

6. Setting Up the Project
Make sure you have installed all the dependencies by running:
```bash
npm install
```
Then, you can run the bot using:
```bash
npm start
```
To build the project, use:
```bash
npm run build
```

Now you can run the bot and use the commands you've created, whether they are prefix commands or slash commands.

Notes:

Ensure that you have added the bot token in the config.ts file.
You can easily add more commands or events in the same manner and expand the project as needed.
markdown
Copy code

### Explanation of the File:

- **Running the Bot**: Explains how to run the bot using `npm start`.
- **Building the Project**: Describes how to build the project using `npm run build`.
- **Event File**: Shows how to create an event file inside the `src/events` folder with an example.
- **Prefix Command**: Explains how to create a prefix command with an example.
- **Slash Command**: Demonstrates how to create a slash command using two methods with examples.

