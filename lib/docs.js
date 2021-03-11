"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDocsStub(info, version, title, host, basePath, tags) {
    const docs = {
        openapi: '3.0.0', info: {
            description: info,
            version, title,
        }, host, basePath,
        tags, schemes: ['http'], paths: {},
        components: {
            description: {
                alwaysok: `Всегда возвращается 200. Индикация ошибки в поле ok ответа.
                               Отличные от 200 ответы могут возникнуть только в случае очень серьезной проблемы`
            },
            property: {
                ok: { type: 'boolean', description: `true - если операция прошла успешно. false если произошла ошибка.
                     Если ошибка была, то также будет присутствовать поле error - с коротким мнемоническим
                     описанием ошибки` }
            }
        }
    };
    return docs;
}
exports.default = createDocsStub;