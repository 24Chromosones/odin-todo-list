import sidebar from "./modules/sidebar";
import navbar from "./modules/navbar";
import {tasks} from "./modules/tasks";

import "./styles.css";

const container = document.querySelector('#content')
container.appendChild(navbar())
container.appendChild(sidebar())
container.appendChild(tasks())

