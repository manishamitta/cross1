using MyService as service from '../../srv/service';
annotate service.class with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 's_id',
                Value : s_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 's_name',
                Value : s_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 's_marks',
                Value : s_marks,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 's_id',
            Value : s_id,
        },
        {
            $Type : 'UI.DataField',
            Label : 's_name',
            Value : s_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 's_marks',
            Value : s_marks,
        },
    ],
);

