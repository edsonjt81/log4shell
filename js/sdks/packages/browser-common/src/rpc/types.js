"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundToInboundMessageValueMap = void 0;
exports.OutboundToInboundMessageValueMap = {
    CommitToken: 'ReceiveCommittedToken',
    Attributes: 'ReceiveAttributesConfirmation',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUEyRWEsUUFBQSxnQ0FBZ0MsR0FBOEI7SUFDekUsV0FBVyxFQUFFLHVCQUF1QjtJQUNwQyxVQUFVLEVBQUUsK0JBQStCO0NBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEZyYW1lTWVzc2FnZTxLLCBUIGV4dGVuZHMga2V5b2YgSz4ge1xuICBjb21tYW5kOiBUO1xuICBjb3JyZWxhdGlvblRva2VuOiBzdHJpbmc7XG4gIGRhdGE6IEtbVF07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5rbm93bkZyYW1lTWVzc2FnZSB7XG4gIGNvbW1hbmQ6IHN0cmluZztcbiAgY29ycmVsYXRpb25Ub2tlbjogc3RyaW5nO1xuICBmcmFtZU5vbmNlPzogdW5kZWZpbmVkO1xuICBkYXRhOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnJhbWVOb3RpZmljYXRpb248SywgVCBleHRlbmRzIGtleW9mIEs+IHtcbiAgY29tbWFuZDogVDtcbiAgZnJhbWVOb25jZTogc3RyaW5nO1xuICBkYXRhOiBLW1RdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVua25vd25GcmFtZU5vdGlmaWNhdGlvbiB7XG4gIGNvbW1hbmQ6IHN0cmluZztcbiAgLy8gTm90aWZpY2F0aW9ucyBkb24ndCBoYXZlIGNvcnJlbGF0aW9uIHRva2Vuc1xuICBjb3JyZWxhdGlvblRva2VuPzogdW5kZWZpbmVkO1xuICBmcmFtZU5vbmNlOiBzdHJpbmc7XG4gIGRhdGE6IGFueTtcbn1cblxuLy8gVGVsbCB0aGUgaWZyYW1lIHRvIGNvbW1pdCBpdHMgZGF0YSB0byB0aGUgc2VydmVyIGFuZCBzZW5kIGJhY2sgYSB0b2tlblxuZXhwb3J0IGludGVyZmFjZSBDb21taXRUb2tlbk1lc3NhZ2Uge31cbi8vIEluaXRpYWxpemUgb3IgdXBkYXRlIHNvbWUgYXR0cmlidXRlIG9mIHRoZSBpZnJhbWVcbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlc01lc3NhZ2Uge1xuICBpZDogc3RyaW5nO1xuICBzdHlsZT86IHN0cmluZztcbiAgdG9rZW4/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbi8vIE5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgaWZyYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmeU9uQmx1ck1lc3NhZ2Uge31cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZ5T25TdGFydE1lc3NhZ2Uge31cblxuZXhwb3J0IGludGVyZmFjZSBSZWNlaXZlQ29tbWl0dGVkVG9rZW5NZXNzYWdlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgdG9rZW4/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY2VpdmVkQXR0cmlidXRlc01lc3NhZ2Uge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdXRib3VuZEZyYW1lTWVzc2FnZU1hcCB7XG4gIENvbW1pdFRva2VuOiBDb21taXRUb2tlbk1lc3NhZ2U7XG4gIEF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXNNZXNzYWdlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluYm91bmRGcmFtZU1lc3NhZ2VNYXAge1xuICBSZWNlaXZlQ29tbWl0dGVkVG9rZW46IFJlY2VpdmVDb21taXR0ZWRUb2tlbk1lc3NhZ2U7XG4gIFJlY2VpdmVBdHRyaWJ1dGVzQ29uZmlybWF0aW9uOiBSZWNlaXZlZEF0dHJpYnV0ZXNNZXNzYWdlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluYm91bmRGcmFtZU5vdGlmaWNhdGlvbk1hcCB7XG4gIE5vdGlmeU9uQmx1cjogTm90aWZ5T25CbHVyTWVzc2FnZTtcbiAgTm90aWZ5T25TdGFydDogTm90aWZ5T25TdGFydE1lc3NhZ2U7XG59XG5cbmV4cG9ydCB0eXBlIE91dGJvdW5kTWVzc2FnZUxvb2t1cFR5cGUgPSB7XG4gIFtrZXkgaW4ga2V5b2YgT3V0Ym91bmRGcmFtZU1lc3NhZ2VNYXBdOiBrZXlvZiBJbmJvdW5kRnJhbWVNZXNzYWdlTWFwO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBPdXRib3VuZFRvSW5ib3VuZE1lc3NhZ2VUeXBlTWFwIGV4dGVuZHMgT3V0Ym91bmRNZXNzYWdlTG9va3VwVHlwZSB7XG4gIENvbW1pdFRva2VuOiAnUmVjZWl2ZUNvbW1pdHRlZFRva2VuJztcbn1cblxuZXhwb3J0IGNvbnN0IE91dGJvdW5kVG9JbmJvdW5kTWVzc2FnZVZhbHVlTWFwOiBPdXRib3VuZE1lc3NhZ2VMb29rdXBUeXBlID0ge1xuICBDb21taXRUb2tlbjogJ1JlY2VpdmVDb21taXR0ZWRUb2tlbicsXG4gIEF0dHJpYnV0ZXM6ICdSZWNlaXZlQXR0cmlidXRlc0NvbmZpcm1hdGlvbicsXG59O1xuIl19