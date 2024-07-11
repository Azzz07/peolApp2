
// import { IControl } from 'mdk-core/controls/IControl';
// import { TextField } from '@nativescript/core/ui/text-field';
// import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
// import { Label } from '@nativescript/core/ui/label';
// import { Button } from '@nativescript/core/ui/button';
// import { Http } from '@nativescript/core';
// import { alert } from '@nativescript/core/ui/dialogs';
// import { ListPicker } from '@nativescript/core/ui/list-picker';
// import { ContentView } from '@nativescript/core/ui/content-view';

// export class QusEXtn extends IControl {
//     private _descriptionLabels: Label[];
//     private _replyFields: Array<TextField | ListPicker | string>;
//     private _questionnaireIdFields: TextField[];
//     private _docId: string;
//     private _invitationId: string;
//     private _saveButton: Button;
//     private _mainStackLayout: StackLayout;

//     public constructor() {
//         super();
//         this._descriptionLabels = [];
//         this._replyFields = [];
//         this._questionnaireIdFields = [];
//     }

//     public view(): any {
//         if (!this._mainStackLayout) {
//             this._mainStackLayout = new StackLayout();
//             this._mainStackLayout.orientation = 'vertical';

//             this.fetchAndPopulateData();

//             let bottomLayout = new StackLayout();
//             bottomLayout.height = 100;
//             bottomLayout.width = '100%';
//             bottomLayout.verticalAlignment = 'bottom';

//             let buttonContainer = new StackLayout();
//             buttonContainer.horizontalAlignment = 'right';
//             buttonContainer.verticalAlignment = 'bottom';
//             buttonContainer.width = '100%';

//             this._saveButton = this.createStyledButton('Save', this.updateServiceWithData.bind(this));
//             buttonContainer.addChild(this._saveButton);
//             bottomLayout.addChild(buttonContainer);

//             let pageLayout = new StackLayout();
//             pageLayout.addChild(this._mainStackLayout);
//             pageLayout.addChild(bottomLayout);

//             return pageLayout;
//         }

//         return this._mainStackLayout;
//     }

//     private createStyledButton(text: string, onTap: () => void): Button {
//         const button = new Button();
//         button.text = text;
//         button.width = 100;
//         button.height = 50;
//         button.marginTop = 15;
//         button.borderRadius = 25;
//         button.backgroundColor = '#51abf1';
//         button.color = '#FFFFFF';
//         button.horizontalAlignment = 'right';
//         button.on(Button.tapEvent, onTap);
//         return button;
//     }

//     private createDropdown(options: any[], index: number): ContentView {
//         const dropdown = new ContentView();
//         const optionsStack = new StackLayout();
//         optionsStack.orientation = 'vertical';
//         optionsStack.visibility = 'collapse';

//         const updateVisualState = (selectedOption: string) => {
//             optionsStack.eachChild((child) => {
//                 const label = child as Label;
//                 label.text = label.text.includes(selectedOption) ? `◉ ${selectedOption}` : `◯ ${label.text.trim().substring(2)}`;
//                 return true;
//             });
//             alert(`You selected: ${selectedOption}`);
//             this._replyFields[index] = selectedOption;
//         };

//         options.forEach((option) => {
//             const optionLabel = new Label();
//             optionLabel.text = `◯ ${option.dropdown_value}`;
//             optionLabel.fontSize = 18;
//             optionLabel.marginBottom = 10;
//             optionLabel.width = 280;
//             optionLabel.textAlignment = 'left';
//             optionLabel.padding = 10;
//             optionLabel.on('tap', () => {
//                 updateVisualState(option.dropdown_value);
//             });
//             optionsStack.addChild(optionLabel);
//         });

//         dropdown.content = optionsStack;
//         return dropdown;
//     }

//     private createBooleanDropdown(options: string[], index: number): ContentView {
//         const dropdown = new ContentView();
//         const optionsStack = new StackLayout();
//         optionsStack.orientation = 'vertical';
//         optionsStack.visibility = 'collapse';

//         const updateVisualState = (selectedOption: string) => {
//             optionsStack.eachChild((child) => {
//                 const label = child as Label;
//                 label.text = label.text.includes(selectedOption) ? `◉ ${selectedOption}` : `◯ ${label.text.trim().substring(2)}`;
//                 return true;
//             });
//             alert(`You selected: ${selectedOption}`);
//             this._replyFields[index] = selectedOption;
//         };

//         options.forEach((option) => {
//             const optionLabel = new Label();
//             optionLabel.text = `◯ ${option}`;
//             optionLabel.fontSize = 18;
//             optionLabel.marginBottom = 10;
//             optionLabel.width = 150;
//             optionLabel.textAlignment = 'justify';
//             optionLabel.padding = 10;
//             optionLabel.on('tap', () => {
//                 updateVisualState(option);
//             });
//             optionsStack.addChild(optionLabel);
//         });

//         dropdown.content = optionsStack;
//         return dropdown;
//     }

//     private fetchAndPopulateData(): void {
//         const serviceUrl = 'https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq \'Doc54576247\' and invitationId eq \'babita.sharam@peolsolutions.com\'';

//         Http.getJSON(serviceUrl).then(response => {
//             if (response && response.value && Array.isArray(response.value)) {
//                 response.value.forEach((item, index) => {
//                     if (item) {
//                         if (item.type === 'RQAATTACH') {
//                             return;
//                         }

//                         const qusIdField = new TextField();
//                         qusIdField.hint = 'Questionnaire ID';
//                         qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
//                         qusIdField.visibility = 'collapsed';
//                         this._questionnaireIdFields.push(qusIdField);

//                         const descriptionLabel = new Label();
//                         descriptionLabel.fontSize = 20;
//                         descriptionLabel.marginBottom = 10;
//                         descriptionLabel.text = item.description ? `${item.description}  ( > )` : 'No description available';

//                         this._descriptionLabels.push(descriptionLabel);

//                         let replyField;

//                         if (item.type === 'RQASTRINGListOfChoices') {
//                             replyField = new ListPicker();
//                             replyField.visibility = 'collapse';
//                             this._replyFields[index] = replyField;

//                             const dropdownServiceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Dropdown?$filter=questionnaire_id eq '${item.questionnaire_id}'`;

//                             Http.getJSON(dropdownServiceUrl).then(dropdownResponse => {
//                                 if (dropdownResponse && dropdownResponse.value && Array.isArray(dropdownResponse.value)) {
//                                     const dropdown = this.createDropdown(dropdownResponse.value, index);

//                                     const itemLayout = new StackLayout();
//                                     itemLayout.orientation = 'vertical';
//                                     itemLayout.addChild(qusIdField);
//                                     itemLayout.addChild(descriptionLabel);
//                                     itemLayout.addChild(dropdown);
//                                     itemLayout.addChild(replyField);

//                                     this._mainStackLayout.addChild(itemLayout);

//                                     descriptionLabel.on('tap', () => {
//                                         const dropdownContent = dropdown.content as StackLayout;
//                                         dropdownContent.visibility = dropdownContent.visibility === 'collapse' ? 'visible' : 'collapse';
//                                         descriptionLabel.text = dropdownContent.visibility === 'visible' ? `${item.description} ( v )` : `${item.description} ( > )`;
//                                     });
//                                 } else {
//                                     throw new Error('Invalid dropdown response format');
//                                 }
//                             }).catch(dropdownError => {
//                                 console.error('Error fetching dropdown data:', dropdownError);
//                                 alert('Failed to fetch dropdown data.');
//                             });
//                         } else if (item.type === 'RQABOOLEAN') {
//                             const dropdown = this.createBooleanDropdown(['Yes', 'No'], index);

//                             const itemLayout = new StackLayout();
//                             itemLayout.orientation = 'vertical';
//                             itemLayout.addChild(qusIdField);
//                             itemLayout.addChild(descriptionLabel);
//                             itemLayout.addChild(dropdown);

//                             this._mainStackLayout.addChild(itemLayout);

//                             descriptionLabel.on('tap', () => {
//                                 const dropdownContent = dropdown.content as StackLayout;
//                                 dropdownContent.visibility = dropdownContent.visibility === 'collapse' ? 'visible' : 'collapse';
//                                 descriptionLabel.text = dropdownContent.visibility === 'visible' ? `${item.description} ( v )` : `${item.description} ( > )`;
//                             });
//                         } else {
//                             replyField = new TextField();
//                             replyField.hint = `User Reply ${index + 1}`;
//                             replyField.text = item.user_reply || 'No reply available';
//                             replyField.visibility = 'collapse';
//                             replyField.underline = false;
//                             this._replyFields[index] = replyField;

//                             const itemLayout = new StackLayout();
//                             itemLayout.orientation = 'vertical';
//                             itemLayout.addChild(qusIdField);
//                             itemLayout.addChild(descriptionLabel);
//                             itemLayout.addChild(replyField);

//                             this._mainStackLayout.addChild(itemLayout);
//                         }

//                         descriptionLabel.on('tap', () => {
//                             const replyField = this._replyFields[index];
//                             if (replyField instanceof ContentView) {
//                                 const contentView = replyField.content as StackLayout;
//                                 contentView.visibility = contentView.visibility === 'collapse' ? 'visible' : 'collapse';
//                                 descriptionLabel.text = contentView.visibility === 'visible' ? `${item.description} ( v )` : `${item.description} ( > )`;
//                             } else if (replyField instanceof TextField) {
//                                 replyField.visibility = replyField.visibility === 'collapse' ? 'visible' : 'collapse';
//                                 descriptionLabel.text = replyField.visibility === 'visible' ? `${item.description} ( v )` : `${item.description} ( > )`;
//                             }
//                         });
//                     }
//                 });
//             } else {
//                 throw new Error('Invalid response format');
//             }
//         }).catch(error => {
//             console.error('Error fetching data from service:', error);
//             alert(`Failed to fetch data: ${error.message}`);
//         });
//     }

//     private updateServiceWithData(): void {
//         const serviceUrl = 'https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table';
//         const promises = this._questionnaireIdFields.map((qusIdField, index) => {
//             const requestData = {
//                 doc_id: this._docId,
//                 invitationId: this._invitationId,
//                 questionnaire_id: qusIdField.text,
//                 user_reply: this._replyFields[index] instanceof TextField ? (this._replyFields[index] as TextField).text : this._replyFields[index]
//             };

//             return Http.request({
//                 url: serviceUrl,
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 content: JSON.stringify(requestData)
//             });
//         });

//         Promise.all(promises)
//             .then(responses => {
//                 alert('Replies saved successfully!');
//             })
//             .catch(error => {
//                 console.error('Error saving replies:', error);
//                 alert('Failed to save replies.');
//             });
//     }
// }

import { IControl } from 'mdk-core/controls/IControl';
import { TextField } from '@nativescript/core/ui/text-field';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { Label } from '@nativescript/core/ui/label';
import { Button } from '@nativescript/core/ui/button';
import { Http } from '@nativescript/core';
import { alert } from '@nativescript/core/ui/dialogs';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { ContentView } from '@nativescript/core/ui/content-view';
import { Frame } from '@nativescript/core/ui/frame'; // Import Frame module for navigation
import { context } from 'mdk-core/context/Context';

import { GestureTypes } from '@nativescript/core/ui/gestures';
import { TextView } from '@nativescript/core/ui/text-view';


export class QusEXtn extends IControl {
    private _descriptionLabels: Label[];
    private _replyFields: Array<TextField | ListPicker | string>;
    private _questionnaireIdFields: TextField[];
    private _docId: string;
    private _invitationId: string;
    private _saveButton: Button;
    private _mainStackLayout: StackLayout;
    private _dpval: string;
    private _dpva: string;
    private _itemTypes: string[];

    public constructor() {
        super();
        this._descriptionLabels = [];
        this._replyFields = [];
        this._questionnaireIdFields = [];
        this._itemTypes = []; // Initialize the new array

    }

    public view(): any {
        if (!this._mainStackLayout) {
            this._mainStackLayout = new StackLayout();
            this._mainStackLayout.orientation = 'vertical';

            this.fetchAndPopulateData();

            let bottomLayout = new StackLayout();
            bottomLayout.height = 100;
            bottomLayout.width = '100%';
            bottomLayout.verticalAlignment = 'bottom';

            let buttonContainer = new StackLayout();
            buttonContainer.horizontalAlignment = 'right';
            buttonContainer.verticalAlignment = 'bottom';
            buttonContainer.width = '100%';

            this._saveButton = this.createStyledButton('Save', this.updateServiceWithData.bind(this));
            buttonContainer.addChild(this._saveButton);

            // Create Navigate button
            const navigateButton = this.createNavigateButton('Navigate', this.navigateToAttachmentCreate.bind(this));
            buttonContainer.addChild(navigateButton);

            bottomLayout.addChild(buttonContainer);

            let pageLayout = new StackLayout();
            pageLayout.addChild(this._mainStackLayout);
            pageLayout.addChild(bottomLayout);

            return pageLayout;
        }

        return this._mainStackLayout;
    }

    private createStyledButton(text: string, onTap: () => void): Button {
        const button = new Button();
        button.text = text;
        button.width = 100;
        button.height = 50;
        button.marginTop = 15;
        button.borderRadius = 25;
        button.backgroundColor = '#51abf1';
        button.color = '#FFFFFF';
        button.horizontalAlignment = 'right';
        button.on(Button.tapEvent, onTap);
        return button;
    }

    private createDropdown(options: any[], index: number): ContentView {
        const dropdown = new ContentView();
        const optionsStack = new StackLayout();
        optionsStack.orientation = 'vertical';
        optionsStack.visibility = 'collapse';

        const updateVisualState = (selectedOption: string) => {
            optionsStack.eachChild((child) => {
                const label = child as Label;
                label.text = label.text.includes(selectedOption) ? `◉ ${selectedOption}` : `◯ ${label.text.trim().substring(2)}`;
                return true;
                // this._dpva = selectedOption;
                // this._replyFields[index] = selectedOption;
            });
            alert(`You selected: ${selectedOption}`);
            // this._replyFields[index] = selectedOption;
            this._replyFields[index] = selectedOption;
            this._dpva = selectedOption;
            this._replyFields[index] = selectedOption;
        };

        options.forEach((option) => {
            const optionLabel = new Label();
            optionLabel.text = `◯ ${option.dropdown_value}`;
            optionLabel.fontSize = 18;
            optionLabel.marginBottom = 10;
            optionLabel.width = 280;
            optionLabel.textAlignment = 'left';
            optionLabel.horizontalAlignment = 'left';
            optionLabel.padding = 10;
            optionLabel.on('tap', () => {
                updateVisualState(option.dropdown_value);
            });
            optionsStack.addChild(optionLabel);
        });

        dropdown.content = optionsStack;
        return dropdown;
    }

    private createBooleanDropdown(options: string[], index: number): ContentView {
        const dropdown = new ContentView();
        const optionsStack = new StackLayout();
        optionsStack.orientation = 'vertical';
        optionsStack.visibility = 'collapse';

        const updateVisualState = (selectedOption: string) => {
            optionsStack.eachChild((child) => {
                const label = child as Label;
                label.text = label.text.includes(selectedOption) ? `◉ ${selectedOption}` : `◯ ${label.text.trim().substring(2)}`;
                return true;
            });
            alert(`You selected: ${selectedOption}`);
            this._replyFields[index] = selectedOption;
            this._dpval = selectedOption;
            this._replyFields[index] = selectedOption;
        };

        options.forEach((option) => {
            const optionLabel = new Label();
            optionLabel.text = `◯ ${option}`;
            optionLabel.fontSize = 18;
            optionLabel.marginBottom = 10;
            optionLabel.width = 150;
            optionLabel.textAlignment = 'left';
            optionLabel.horizontalAlignment = 'left';
            optionLabel.padding = 10;
            optionLabel.on('tap', () => {
                updateVisualState(option);
            });
            optionsStack.addChild(optionLabel);
        });

        dropdown.content = optionsStack;
        return dropdown;
    }

    private fetchAndPopulateData(): void {

this._docId = this.context.binding.doc_id;
this._invitationId = this.context.binding.invitationId  

alert(`${this._docId}`)
// const serviceUrl = 'https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq \'Doc54576247\' and invitationId eq \'babita.sharam@peolsolutions.com\'';
const serviceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table?$filter=doc_id eq '${this._docId}' and invitationId eq '${this._invitationId}'`;


        Http.getJSON(serviceUrl).then(response => {
            if (response && response.value && Array.isArray(response.value)) {
                response.value.forEach((item, index) => {
                    if (item) {
                        if (item.type === 'RQAATTACH') {
                            return;
                        }

                        const qusIdField = new TextField();
                        qusIdField.hint = 'Questionnaire ID';
                        qusIdField.text = item.questionnaire_id || 'No questionnaire ID';
                        qusIdField.visibility = 'collapsed';
                        this._questionnaireIdFields.push(qusIdField);

                        const descriptionLabel = new Label();
                        if( item.type === 'RQABOOLEAN' || item.type === 'RQASTRINGListOfChoices' ){
                            // descriptionLabel.visibility = 'collapsed'
                             this._itemTypes[index] = item.type;
                         }

                        descriptionLabel.fontSize = 20;
                        descriptionLabel.textDecoration = 'none';
                        descriptionLabel.style.fontWeight = 'bold'; // Apply bold font weight using CSS property


                        descriptionLabel.marginBottom = 10;
                        descriptionLabel.text = item.description ? `${item.description}  ( > )` : 'No description available';

                        this._descriptionLabels.push(descriptionLabel);

                        let replyField;

                        if (item.type === 'RQASTRINGListOfChoices') {
                            replyField = new ListPicker();
                            replyField.visibility = 'collapse';
                            this._replyFields[index] = replyField;

                            const dropdownServiceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Dropdown?$filter=questionnaire_id eq '${item.questionnaire_id}'`;

                            Http.getJSON(dropdownServiceUrl).then(dropdownResponse => {
                                if (dropdownResponse && dropdownResponse.value && Array.isArray(dropdownResponse.value)) {
                                    const dropdown = this.createDropdown(dropdownResponse.value, index);

                                    const itemLayout = new StackLayout();
                                    itemLayout.orientation = 'vertical';
                                    itemLayout.addChild(qusIdField);
                                    itemLayout.addChild(descriptionLabel);
                                    itemLayout.addChild(dropdown);
                                    itemLayout.addChild(replyField);

                                    this._mainStackLayout.addChild(itemLayout);

                                    descriptionLabel.on('tap', () => {
                                        const dropdownContent = dropdown.content as StackLayout;
                                        dropdownContent.visibility = dropdownContent.visibility === 'collapse' ? 'visible' : 'collapse';
                                        descriptionLabel.text = dropdownContent.visibility === 'visible' ? `${item.description} ( v )` : `${item.description} ( > )`;
                                    });
                                } else {
                                    throw new Error('Invalid dropdown response format');
                                }
                            }).catch(dropdownError => {
                                console.error('Error fetching dropdown data:', dropdownError);
                                alert('Failed to fetch dropdown data.');
                            });
                        } else if (item.type === 'RQABOOLEAN') {
                            const dropdown = this.createBooleanDropdown(['Yes', 'No'], index);

                            const itemLayout = new StackLayout();
                            itemLayout.orientation = 'vertical';
                            itemLayout.addChild(qusIdField);
                            itemLayout.addChild(descriptionLabel);
                            itemLayout.addChild(dropdown);

                            this._mainStackLayout.addChild(itemLayout);

                            descriptionLabel.on('tap', () => {
                                const dropdownContent = dropdown.content as StackLayout;
                                dropdownContent.visibility = dropdownContent.visibility === 'collapse' ? 'visible' : 'collapse';
                                descriptionLabel.text = dropdownContent.visibility === 'visible' ? `${item.description} ( v )` : `${item.description} ( > )`;
                                
                            });
                        } else {
                            replyField = new TextField();
                            replyField.hint = `User Reply ${index + 1}`;
                            replyField.text = item.user_reply || 'No reply available';
                            replyField.visibility = 'collapse';
                            replyField.underline = false;
                            this._replyFields[index] = replyField;

                            const itemLayout = new StackLayout();
                            itemLayout.orientation = 'vertical';
                            itemLayout.addChild(qusIdField);
                            itemLayout.addChild(descriptionLabel);
                            itemLayout.addChild(replyField);

                            this._mainStackLayout.addChild(itemLayout);
                        }

                        descriptionLabel.on('tap', () => {
                            const replyField = this._replyFields[index];
                            if (replyField instanceof ContentView) {
                                const contentView = replyField.content as StackLayout;
                                contentView.visibility = contentView.visibility === 'collapse' ? 'visible' : 'collapse';
                                descriptionLabel.text = contentView.visibility === 'visible' ? `${item.description} ( v ) `: `${item.description} ( > )`;
} else if (replyField instanceof TextField) {
replyField.visibility = replyField.visibility === 'collapse' ? 'visible' : 'collapse';
descriptionLabel.text = replyField.visibility === 'visible' ? `${item.description} ( v )` : `${item.description} ( > )`;
}
});
}
});
} else {
throw new Error('Invalid response format');
}
}).catch(error => {
console.error('Error fetching data from service:', error);
alert(`Failed to fetch data: ${error.message}`);
});
}
// private updateServiceWithData(): void {
//     const serviceUrl = 'https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table';
//     const promises = this._questionnaireIdFields.map((qusIdField, index) => {
//         const requestData = {
//             doc_id: this._docId,
//             invitationId: this._invitationId,
//             questionnaire_id: qusIdField.text,
//             user_reply: this._replyFields[index] instanceof TextField ? (this._replyFields[index] as TextField).text : this._replyFields[index]
//         };

//         return Http.request({
//             url: serviceUrl,
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             content: JSON.stringify(requestData)
//         });
//     });

//     Promise.all(promises)
//         .then(responses => {
//             alert(`Replies saved successfully! ${this._questionnaireIdFields}`);
//         })
//         .catch(error => {
//             console.error('Error saving replies:', error);
//             alert('Failed to save replies.');
//         });
// }

private updateServiceWithData(): void {

    for (let i = 0; i < this._questionnaireIdFields.length; i++) {
               const questionnaireId = this._questionnaireIdFields[i].text;
               let userReply;
   
               const replyControl = this._replyFields[i];
            if (this._itemTypes[i] === 'RQASTRINGListOfChoices') { 
               // If it's a boolean question, update the userReply with the selected dropdown value
               alert(`in ${this._dpva}`);
               userReply = this._dpva;
               }else if (this._itemTypes[i] === 'RQABOOLEAN') { 
                   // If it's a boolean question, update the userReply with the selected dropdown value
                   alert(`in ${this._dpval}`);
                   userReply = this._dpval;
                   }
                 else {
                   userReply = replyControl.text;
                   alert(`text ${replyControl.text}`)
               }
   
                //  const updateServiceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='Doc54576247',invitationId='babita.sharam@peolsolutions.com',questionnaire_id='${questionnaireId}')`;
                 const updateServiceUrl = `https://366db960trial-dev-mobile-bid-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/whatsapp/Questionnaire_reply_table(doc_id='${this._docId}',invitationId='${this._invitationId}',questionnaire_id='${questionnaireId}')`;

               const dataPayload = {
                   
                   user_reply: userReply
               };
   
               Http.request({
                   url: updateServiceUrl,
                   method: 'PATCH',
                   headers: { 'Content-Type': 'application/json' },
                   content: JSON.stringify(dataPayload)
               }).then(response => {
                   const result = response.statusCode;
                   if (result === 200) {
                       alert(`The service has been updated successfully for questionnaire ID: ${questionnaireId} ${userReply}`);
                   } else {
                       alert(`There was an error updating the service for questionnaire ID: ${questionnaireId}`);
                   }
               }).catch(error => {
                   alert(`There was an error updating the service for questionnaire ID: ${error.message}`);
               });
           }
   }
   

private createNavigateButton(text: string, onTap: () => void): Button {
    const button = new Button();
    button.text = text;
    button.width = 150;
    button.height = 50;
    button.marginTop = 15;
    button.borderRadius = 25;
    button.backgroundColor = '#51abf1';
    button.color = '#FFFFFF';
    button.visibility = 'hidden';
    button.horizontalAlignment = 'right';
    button.on(Button.tapEvent, onTap);
    return button;
}

private navigateToAttachmentCreate(): void {
    try {
        console.log('Navigating to attachment create page...');
        const topFrame = Frame.topmost();
        if (topFrame) {
            topFrame.navigate({
                moduleName: '/home/user/projects/peolApp2/Pages/AttachCreate.page',
                clearHistory: false, // Adjust as per your navigation needs
                animated: true
            });
        } else {
            throw new Error('Topmost frame not found.');
        }
    } catch (error) {
        console.error('Error navigating to attachment create page:', error);
        alert('Failed to navigate: ' + `${error}`);
    }
}


}