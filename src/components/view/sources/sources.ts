import { Source } from '../../../types';
import './sources.css';

class Sources {
    public draw(data: Source[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (!sourceItemTemp) return;

        data.forEach((item: Source) => {
            const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameElement = sourceClone.querySelector('.source__item-name');
            if (nameElement) {
                nameElement.textContent = item.name;
            }

            const sourceElement = sourceClone.querySelector('.source__item');
            if (sourceElement) {
                sourceElement.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.appendChild(fragment);
        }
    }
}

export default Sources;